import { NEW_TODO, TOGGLE_COMPLETE_TODO } from "./constants";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case TOGGLE_COMPLETE_TODO:
      const todosCopy = [...state.items];
      const index = todosCopy.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index < 0) return state;
      todosCopy[index].completed = !todosCopy[index].completed;
      return {
        ...state,
        items: todosCopy,
      };
    default:
      return state;
  }
};

export default reducer;
