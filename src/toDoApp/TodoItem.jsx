/* eslint-disable react/prop-types */
export const TodoItem = ({todo, onRemove, onToggleTodo }) => {
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-1">
      
        <span className={`${todo.done && 'text-decoration-line-through'}`}>
          {todo.description}
        </span>
        
        <div className="d-flex">

          <button
            className="btn btn-light"
            onClick={ () => onToggleTodo(todo.id)}
          >
              <span
                className={`fas fa-check`} style={{color: todo.done ? '#5fc34b' : '',  }}></span> 
          </button>
            
          <button 
            className="btn btn-light"
            onClick={() => onRemove(todo.id)}
          >
            <span className="fas fa-trash-alt" style={{ color: 'red' }}></span> 
            {/* esta etiqueta i es el icono bote de basura*/}
          </button>

        </div>
        
    </li>
  )
}
