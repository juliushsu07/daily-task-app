import { React, useEffect} from 'react'
import { useTaskContext } from "../hooks/useTaskContext"

// components
import TaskDetails from '../components/TaskDetails'
import TaskForm from '../components/TaskForm'

// a
import axios from 'axios';

axios.defaults.baseURL = process.env.REST_API_URL;

const Home = () => {
  const {tasks, dispatch} = useTaskContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      console.log("fetch called!")
      const response = await fetch('/tasks')
      const json = await response.json()

      if(response.ok) {
        dispatch({type: 'SET_TASKS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

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

export default Home