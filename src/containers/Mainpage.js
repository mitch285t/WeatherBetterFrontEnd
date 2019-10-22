import React, { Component } from "react";
import Weather from "./weather.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Location from "../components/location";
class Mainpage extends Component {
  render() {
    console.log(this.props.locations);
    return (
      <div>
        <div>
          <div className="w3-display-topleft">hello</div>
          <Router>
            <div>
              <Route exact path="/weather" component={Weather} />
              <Link to={"/weather"}>Weather</Link>
            </div>
          </Router>
        </div>
        <div className="column">
          {this.props.locations.map(function(location) {
            return <Location location={location} />;
          })}
        </div>
      </div>
    );
  }
}
export default Mainpage;
