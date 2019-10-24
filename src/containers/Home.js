import React, { Component } from "react";
import "../App.css";
import Signup from "./signup.js";
import Profile from "./profile.js";
import Login from "./login.js";
import Mainpage from "./Mainpage.js";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Weather from "./weather";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      locations: []
    };
  }

  render() {
    return (
      <div>
        <Navbar variant="light">
          <Router>
            {/* <Navigationbar /> */}

            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/signup" render={() => <Signup />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/Mainpage"
              render={routerProps => (
                <Mainpage {...routerProps} locations={this.state.locations} />
              )}
            />
            <Route path={"/Weather"} component={Weather} />
            {/* </div> */}
          </Router>
        </Navbar>
      </div>
    );
  }
}
export default Home;
