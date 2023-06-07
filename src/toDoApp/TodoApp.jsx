
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../customHook/useTodos"


export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveToDo, handleToggleTodo} = useTodos(); 

    return (
        <>  
            <h1 className="d-flex justify-content-center align-items-center">ToDo App</h1>
            <h3 ><small>Tareas: {todosCount} | Completadas: {pendingTodosCount}</small></h3>
            <hr />
            <h5 style={{ opacity: '0.5' }} className="mb-3">Crea tu lista de tareas</h5>
            <div className="row ">
                <div className="col-8">

                <TodoList 
                todos={todos} 
                onRemove={handleRemoveToDo}
                onToggleTodo={handleToggleTodo}
                />
 
                </div>

                <div className="col-4">
                    <h4>Agregar Tarea</h4>
                    <hr />

                <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>

            
        </>
    )
}
