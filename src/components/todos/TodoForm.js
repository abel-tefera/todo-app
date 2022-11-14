import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TodoForm = ({ mode }) => {
  const todoContext = useContext(TodoContext);
  const { current, addTodo, updateTodo, clearCurrent } = todoContext;
  const navigate = useNavigate();

  const defaultTodo = {
    title: "",
    tasks: [],
    completed: false,
  };

  useEffect(() => {
    if (current !== null && mode !== "add") {
      setTodo(current);
    } else {
      setTodo(defaultTodo);
    }
    // eslint-disable-next-line
  }, [current]);

  const [todo, setTodo] = useState(defaultTodo);
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateTodo(todo);
      clearCurrent();
      navigate("/");
    } else {
      addTodo(todo);
      setTodo(defaultTodo);
    }
  };

  const { title, tasks } = todo;

  return (
    <form onSubmit={onSubmit} className="form-container">
      <h2 className="text-primary">
        {mode === "edit" ? "Edit Todo" : "Add a Todo"}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        maxLength="25"
        value={title}
        onChange={onChange}
        required
      />
      <div className="grid-2">
        <div>
          <input
            type="text"
            name="task"
            maxLength="25"
            placeholder="Add a Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="button"
            value={"Add Task"}
            onClick={() => {
              if (task.trim() !== "") {
                setTodo({ ...todo, tasks: [...tasks, task] });
                setTask("");
              }
            }}
            className="btn btn-primary btn-block"
          />
        </div>
        {todo.tasks.length > 0 && (
          <ul>
            {todo.tasks.map((task, i) => (
              <div
                className="grid-2"
                key={i}
                style={{ marginTop: "5px", marginBottom: "5px" }}
              >
                <li>{task}</li>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() =>
                    setTodo({
                      ...todo,
                      tasks: tasks.filter((_, j) => j !== i),
                    })
                  }
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
      <input
        type="submit"
        value={"Submit"}
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

TodoForm.propTypes = {
  mode: PropTypes.string,
};

TodoForm.defaultProps = {
  mode: "add",
};

export default TodoForm;
