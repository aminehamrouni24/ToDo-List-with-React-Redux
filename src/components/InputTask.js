import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actionsTasks";

const InputTask = () => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    if (inputTask !== "") {
      dispatch(
        addTask({ id: Math.random(), text: inputTask, isCompleted: false })
      );
      setInputTask("");
    } else {
      alert("Please add your task !");
    }
  };

  return (
    <div>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Ready for a new task !!!!'
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={add} className='btn btn-danger'>
          Add Task ...
        </button>
      </div>
    </div>
  );
};

export default InputTask;
