import { useState } from "react";

const TaskList = ({ tasks, onDeleteTask }) => {
  const [isCrossedArray, setIsCrossedArray] = useState(tasks.map(() => false));

  const handleLiClick = (index) => {
    const updatedIsCrossedArray = [...isCrossedArray];
    updatedIsCrossedArray[index] = !updatedIsCrossedArray[index];
    setIsCrossedArray(updatedIsCrossedArray);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => handleLiClick(index)}
          className={`li-tag ${isCrossedArray[index] ? "crossed" : "not-crossed"}`}
        >
          <span className={isCrossedArray[index] ? "crossed" : ""}>{task}</span>
          <button onClick={() => onDeleteTask(index)} className="task-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
