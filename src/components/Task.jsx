import React from "react";

const Task = ({ title, description, deleteTask, index }) => {


  const currentDate = new Date();
  // const currentDateTimeString = currentDate.toLocaleString(); 
  const currentDateTimeString = currentDate.toLocaleString('en-US', { timeZone: 'Asia/Calcutta' });


  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <span>{currentDateTimeString}</span>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
