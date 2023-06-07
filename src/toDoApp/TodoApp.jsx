
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../customHook/useTodos"


export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveToDo, handleToggleTodo} = useTodos(); 

    return (
        <>  
            <h1 className="d-flex justify-content-center align-items-center">ToDo App</h1>
            <h3 ><small>Tareas: {todosCount} | Pendientes: {pendingTodosCount}</small></h3>
            <hr />
            <h6 style={{ opacity: '0.5' }} className="mb-3">Crea tu lista de tareas</h6>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">

                <TodoList 
                todos={todos} 
                onRemove={handleRemoveToDo}
                onToggleTodo={handleToggleTodo}
                />
 
                </div>

                <div className="col-md-4">
                    <h4>Agregar Tarea</h4>
                    <hr />

                <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>

            
        </>
    )
}
