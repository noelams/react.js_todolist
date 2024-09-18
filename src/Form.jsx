import { useState } from "react";

const Form = ({addTask}) => {

    const [task, setTask] = useState('')

    const handleInputChange = (e) =>{
        setTask(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if (task.trim() !== '') {
            addTask(task)
            setTask('')
        }

    }
    return ( 
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text" 
                placeholder="Add a new task"
                value={task}
                onChange={handleInputChange}
            />
            <button type="submit" className="submit-button">Add</button>
        </form>
     );
}
 
export default Form;