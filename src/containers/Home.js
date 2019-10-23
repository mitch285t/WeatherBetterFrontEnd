import React, { Component } from "react";
import Navigationbar from "./navigationbar.js";
import Signup from "./signup.js";
import Profile from "./profile.js";
import Login from "./login.js";
import Mainpage from "./Mainpage.js";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Weather from "./weather";
import Container from "react-bootstrap/Container";

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
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Router>
              <div>
                <Navigationbar />
                <Route exact path="/" render={() => <div>Home</div>} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/Mainpage"
                  render={routerProps => (
                    <Mainpage
                      {...routerProps}
                      locations={this.state.locations}
                    />
                  )}
                />
                <Route path={"/Weather"} component={Weather} />
              </div>

              <div></div>
            </Router>
          </Navbar>
        </Container>
      </div>
    );
  }
}
export default Home;
