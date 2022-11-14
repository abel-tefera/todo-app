import React, { Fragment } from "react";
import TodoForm from "../todos/TodoForm";
import TodoList from "../todos/TodoList";

const Home = () => {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
    </Fragment>
  );
};

export default Home;
