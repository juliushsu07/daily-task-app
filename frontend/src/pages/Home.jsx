import {React, useEffect, useState } from 'react'
import TaskDetails from '../components/TaskDetails'
import TaskForm from '../components/TaskForm'

export const Home = () => {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/tasks')
      const json = await response.json()

      if(response.ok) {
        setTasks(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className = "tasks">
        {tasks && tasks.map(task => (
            <TaskDetails key={task._id} task={task}/>
            
        ))}
      </div>
      <TaskForm />
    </div>
  )
}