import { Component, React, useEffect, useState } from 'react'
import TaskDetails from '../components/TaskDetails'

function Home() {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/tasks')
      const json = await res.json()

      if(res.ok) {
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
    </div>
  )
}

export default Home