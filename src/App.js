import React from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className='App container'>
      <div className='addTaskk'>
        <h1>So! What You Wish To Do Today</h1>
        <InputTask  />
      </div>
      <TasksList />
    </div>
  );
}

export default App;
