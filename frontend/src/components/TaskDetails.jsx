import React from 'react'
import { useTaskContext } from '../hooks/useTaskContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {
  const { dispatch } = useTaskContext()

  const handleClick = async () => {
    const response = await fetch('/tasks/' + task._id, {
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
      <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}>Done!</span>
    </div>
  )
}

export default TaskDetails