import { React, useState } from 'react'
import { useTaskContext } from "../hooks/useTaskContext"

const TaskForm = () => {
    const { dispatch } = useTaskContext()
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const task = {title}

        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)
            console.log(json.emptyFields)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setTitle('')
            setError(null)
            setEmptyFields([])
            console.log('New task added', json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }
    }
  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Task</h3>
        <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
        />
        <button>Add Task</button>
        {error && <div className = "error">{error}!</div>}
    </form>
  )
}

export default TaskForm