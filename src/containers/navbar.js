import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

class Navbar extends React.Component {

  handleLogout = (event) => {
    window.localStorage.removeItem("token")
  }

  render() {
    return (
      <div>
        <NavLink
          // className="navbar"
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
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
            background: "lightblue"
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
            background: "lightblue"
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
            background: "lightblue"
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
export default Navbar;
