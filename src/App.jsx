import { useState } from 'react';
import './index.css'
import Form from './form';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) =>{
    setTasks([...tasks, newTask])
  }

  const onDeleteTask = (index) =>{
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return ( 
    <div className="app-container">
      <h1>TODO LIST</h1>
      <Form addTask={addTask} />
      <p>TASKS</p>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask}/>
    </div>
    
   );
}
 
export default App;