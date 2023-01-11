import { createContext, useReducer} from 'react'

export const TaskContext = createContext()

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS': 
            return {
                tasks: action.payload
            }
        case 'CREATE_TASK':
            return {
                task: [action.payload, ...state.tasks]
            }
        default: 
        return state
    }
}

export const TaskConetextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, {
        tasks: null
    })

    return (
        <TaskContext.Provider value={{...state, dispatch}}>
            { children }
        </TaskContext.Provider>
      )
}