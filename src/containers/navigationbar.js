import React from "react";
// import "./navbar.css";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white"
};

class Navigationbar extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("id");
  };

  render() {
    return (
      <div>
        <NavLink
          // className="navbar"
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Signup
        </NavLink>
        <NavLink
          // className="navbar"
          to="/profile"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          profile
        </NavLink>
        <NavLink
          // className="navbar"
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Login
        </NavLink>
        <NavLink
          // className="navbar"
          to="/mainpage"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Main Page
        </NavLink>
        <NavLink
          // className="navbar"
          to="/"
          exact
          style={link}
          onClick={event => this.handleLogout(event)}
        >
          Log out
        </NavLink>
      </div>
    );
  }
}
export default Navigationbar;
