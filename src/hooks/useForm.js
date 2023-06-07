import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onReset = () => {
        setFormState(initialForm); //al enviar el valor se reinica y queda en blanco para que no se duplique
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onReset
    }
}