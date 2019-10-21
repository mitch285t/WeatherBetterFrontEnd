import React, { Component } from "react";
import Weather from "./weather.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
class Mainpage extends Component {
  render() {
    return (
      <div>
        <div className="w3-display-topleft">hello</div>
        <Router>
          <div>
            <Route exact path="/weather" componenet={Weather} />
          </div>
        </Router>
        Weather
      </div>
    );
  }
}
export default Mainpage;
