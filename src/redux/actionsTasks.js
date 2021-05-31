import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

export const addTask = (payload) => {
  return { type: ADD, payload };
};
export const deleteTask = (payload) => {
  return { type: DELETE, payload };
};
export const completeTask = (payload) => {
  return { type: COMPLETE, payload };
};
export const editTask = (payload) => {
    return { type: EDIT, payload };
  };
  
