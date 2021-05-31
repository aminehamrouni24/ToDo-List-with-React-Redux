import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

const intialState = {
  tasks: [
    
  ],
};

export const reducerTodo = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, tasks: state.tasks.concat(payload) };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, text: payload.text } : task
        ),
      };
    default:
      return state;
  }
};
