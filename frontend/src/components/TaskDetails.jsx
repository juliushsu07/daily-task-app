import React from 'react'

export const TaskDetails = () => {
  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>{task.createdAt}</p>
    </div>
  )
}