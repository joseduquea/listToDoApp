import { useEffect, useReducer } from "react"
import { todoReducer } from "../toDoApp/todoReducer";

const initialState = []

const init = () => {
    return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [todos, dispatch] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) ); // || [] quiere decir que si lo anterior esta vacio entonces ejecuta lo siguiente 
    }, [todos])

    const todosCount = todos.length;     
    
    const pendingTodosCount = todos.filter(todo => !todo.done).length;    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add ToDo',
            payload: todo
        }
        dispatch(action); //el dispatch es la funcion que yo voy a usar para mandar esa accion al reducer
    }

    const handleRemoveToDo = (id) => {
        dispatch({
            type: 'Remove ToDo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle ToDo',
            payload: id
        })
    }
    return {
        todos,
        handleNewTodo,
        handleRemoveToDo, 
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }
    
}
