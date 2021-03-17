import { NEW_TODO, TOGGLE_COMPLETE_TODO } from "./constants";
import { createAction } from "../utils";

export const todoActions = {
  addNewTodo: (text) => {
    return createAction(NEW_TODO, {
      id: new Date().getTime(),
      text,
      completed: false,
      archived: false,
    });
  },

  toggleTodoCompleted: (id) => {
    return createAction(TOGGLE_COMPLETE_TODO, { id });
  },
};
