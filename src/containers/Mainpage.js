import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Locationspage from "./Locationspage.js";

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/Locationspage">Locations </Link>

            <Route
              path={`/Locationspage`}
              render={routerProps => (
                <Locationspage
                  {...routerProps}
                  locations={this.props.locations}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default Mainpage;
