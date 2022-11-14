import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoContext from "../../context/todo/todoContext";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const todoContext = useContext(TodoContext);
  const { setCurrent, markCompleted, deleteTodo } = todoContext;

  const { title, completed, tasks } = todo;

  return (
    <div
      className="card bg-light"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          className={
            "text-primary text-left " +
            (completed ? "completed-text" : undefined)
          }
        >
          {title}
        </h3>{" "}
        <span
          style={{
            float: "right",
            fontSize: "medium",
          }}
        >
          <input
            type={"checkbox"}
            name={"completedCheck"}
            className="tiny"
            checked={completed}
            onChange={() =>
              markCompleted({ ...todo, completed: !todo.completed })
            }
          />{" "}
          <label className="green-text" htmlFor="completedCheck">
            Completed
          </label>
        </span>
      </div>

      <ul className="list text-left">
        {tasks.map((task, i) => (
          <li key={i}>
            <i className="fas fa-check"></i>{" "}
            <span className={completed ? "completed-text" : undefined}>
              {task}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-left">
        <button
          className="btn btn-dark btn-sm"
          disabled={completed}
          onClick={() => {
            setCurrent(todo);
            navigate("/edit");
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
