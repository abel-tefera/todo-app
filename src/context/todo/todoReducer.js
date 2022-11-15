import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  MARK_COMPLETED,
  SET_CURRENT,
  UPDATE_TODO,
  CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case GET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
