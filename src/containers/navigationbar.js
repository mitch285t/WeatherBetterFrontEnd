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
    window.location.assign("http://localhost:3001")
  };

  render() {
    if(window.localStorage.getItem("username")){
      return (
        <div>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link className="App-link" href="/profile">
                {window.localStorage.getItem("username")}
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
                href="/logout"
                onClick={event => this.handleLogout(event)}
              >
                Log out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      );
    }
    else {
      return (
        <div>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link className="App-link" href="/signup">
                Sign up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="App-link" href="/login">
                Log in
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      );
    }
  }
}
export default Navigationbar;
