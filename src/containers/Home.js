import React, { Component } from "react";
import "../App.css";
import Signup from "./signup.js";
import Profile from "./profile.js";
import Login from "./login.js";
import Mainpage from "./Mainpage.js";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Weather from "./weather";
const Logo = require("./logo.png");
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
        {/* <Navbar> */}
        <Router>
          {/* <Navigationbar /> */}

          <Route
            exact
            path="/"
            render={() => (
              <div className="intro">
                <img src={Logo}></img>
                <h1 className="intro">Welcome to WeatherBetter!</h1>
                <p className="intro">
                  Here you can join a community of betters in betting on and
                  predicting the weather. What are you waiting for? Sign up
                  today with the link above, and make it rain!
                </p>
              </div>
            )}
          />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" render={() => <Mainpage />} />
          <Route path={"/Weather"} component={Weather} />
          {/* </div> */}
        </Router>
        {/* </Navbar> */}
      </div>
    );
  }
}
export default Home;
