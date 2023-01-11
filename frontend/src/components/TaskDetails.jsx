import React from 'react'
import { useTaskContext } from '../hooks/useTaskContext'

const TaskDetails = ({ task }) => {
  const { dispatch } = useTaskContext()

  const handleClick = async () => {
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TASK', payload: json})
    }
  }

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>{task.createdAt}</p>
      <span onClick={handleClick}>Done!</span>
    </div>
  )
}

export default TaskDetails