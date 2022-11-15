import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  UPDATE_TODO,
  MARK_COMPLETED,
  CLEAR_CURRENT,
} from "../types";

import { todos } from "../../data/todos";
import uuid from "react-uuid";

const TodoState = (props) => {
  const initialState = {
    todos: todos,
    current: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    todo.id = uuid();
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const setCurrent = (todo) => {
    dispatch({ type: SET_CURRENT, payload: todo });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateTodo = async (todo) => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

  const markCompleted = (todo) => {
    dispatch({ type: MARK_COMPLETED, payload: todo });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        addTodo,
        deleteTodo,
        setCurrent,
        updateTodo,
        clearCurrent,
        markCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
