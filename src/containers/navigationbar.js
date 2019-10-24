import React from "react";
import "../App.css";

import { Nav } from "react-bootstrap";

class Navigationbar extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("wallet");
  };

  render() {
    return (
      <div>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link className="App-link" href="/signup">
              Signup
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="App-link" href="/profile">
              profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="App-link" href="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="App-link" href="/mainpage">
              Main Page
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="App-link"
              // className="navbar"
              href="/"
              onClick={event => this.handleLogout(event)}
            >
              Log out
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default Navigationbar;
