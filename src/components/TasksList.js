import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="list">
      {tasks.map((task , index) => (
        <Todo task={task} key={index}/>
      ))}
    </div>
  );
};

export default TasksList;
