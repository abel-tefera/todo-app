import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div className="navbar bg-primary">
      <ul>
        <li style={{ display: "block" }}>
          <h1>
            <i className={props.icon} /> {props.title}
          </h1>
          <h4
            style={{
              marginLeft: "3rem",
              lineHeight: "0",
              marginBottom: "1rem",
            }}
          >
            What have you got to do today?
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Todo App",
  icon: "fas fa-tasks",
};
