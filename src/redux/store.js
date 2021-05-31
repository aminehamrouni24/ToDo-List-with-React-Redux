import { createStore } from "redux";
import { reducerTodo } from "./reducerTodo";

export const store = createStore(reducerTodo);
