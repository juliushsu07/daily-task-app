import { React, useState } from 'react'
import { useTaskContext } from "../hooks/useTaskContext"

const TaskForm = () => {
    const { dispatch } = useTaskContext()
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

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
            setError(json.error)
            console.log('error')
        }
        if(response.ok) {
            setTitle('')
            setError(null)
            console.log('New task added', json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }
    }
  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Task</h3>
        <label>TO-DO: </label>
        <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
        <button>Add Task</button>
        {error && <div className = "error">Please enter the task you need to do, sir!</div>}
    </form>
  )
}

export default TaskForm