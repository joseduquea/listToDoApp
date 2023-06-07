
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onReset} = useForm({
        description: ''
    });

    const onNewInputValue = (event) => {
        event.preventDefault();
        if (description.length  <= 2) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);

        onReset();
    }
    

  return (
        <form onSubmit={onNewInputValue}>
            <input 
                type="text" 
                placeholder="Tarea Pendiente"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button 
                type="submit"
                className="btn btn-outline-light mt-1"
            >
                Agregar
            </button>
        </form>
    )                                                                                                   

}
