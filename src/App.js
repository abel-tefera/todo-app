import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import TodoState from "./context/todo/TodoState";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

const App = () => {
  return (
    <TodoState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/edit" element={<Edit />} />
            </Switch>
          </Fragment>
        </Router>
    </TodoState>
  );
};

export default App;
