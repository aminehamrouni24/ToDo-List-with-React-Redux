import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/actionsTasks";
import EditTask from "./EditTask";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className='row jumbotron mt-3'>
        <div className='col-md-4'>
          <p style={task.isCompleted ? { textDecoration: "line-through" } : {}}>
            {task.text}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <i
            className='fas fa-trash fa-lg'
            onClick={() => dispatch(deleteTask(task.id))}
          />
          <EditTask task={task} />
          <i
            style={task.isCompleted ? { color: "green" } : {}}
            className='fas fa-check-circle'
            onClick={() =>
              dispatch(
                completeTask({ id: task.id, isCompleted: task.isCompleted })
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
