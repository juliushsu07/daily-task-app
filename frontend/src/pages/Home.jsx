import { React, useEffect, useState } from 'react'

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
            <p key={task._id}>{task.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home