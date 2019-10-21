import React, { Component } from "react";
import Navbar from "../components/navbar.js";
import Signup from "./signup.js";
import Profile from "./profile.js";
import Login from "./login.js";
import Mainpage from "./Mainpage.js";
import "../components/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar className="navbar" />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
        <div>
          <Mainpage />
        </div>
      </div>
    );
  }
}
export default Home;
