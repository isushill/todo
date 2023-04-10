import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const taskDeleted = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(taskDeleted);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <nav>
        <p>Get ready to complete your daily goals</p>
      </nav>
      <main className="container">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title✍🏼"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Description📝"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Add task</button>
        </form>

        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
