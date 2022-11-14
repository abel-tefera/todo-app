import React, { Fragment } from "react";
import TodoForm from "../todos/TodoForm";

const Edit = () => {
  return (
    <Fragment>
      <TodoForm mode={"edit"} />
    </Fragment>
  );
};

export default Edit;
