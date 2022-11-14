import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../../context/todo/todoContext";

const TodoList = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  return (
    <div className="container grid-3">
      {todos.map((todo, i) => (
        <TodoItem todo={todo} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
