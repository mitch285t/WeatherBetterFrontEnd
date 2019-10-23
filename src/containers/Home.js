import React, { Component } from "react";
import Navbar from "./navbar.js";
import Signup from "./signup.js";
import Profile from "./profile.js";
import Login from "./login.js";
import Mainpage from "./Mainpage.js";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Router>
          <div>
            <Navbar className="navbar" />
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/signup" component={Signup} />
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
          </div>

          <div>
            {/* <Route
              path="/locationspage"
              render={routerProps => (
                <Locationspage
                  {...routerProps}
                  locations={this.state.locations}
                />
              )}
            /> */}
            {/* <Route
              path="/Mainpage"
              render={routerProps => (
                <Mainpage {...routerProps} locations={this.state.locations} />
              )}
            /> */}
          </div>
        </Router>
      </div>
    );
  }
}
export default Home;
