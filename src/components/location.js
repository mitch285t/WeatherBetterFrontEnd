import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import city from "./city";
class Location extends Component {
  render() {
    const location = this.props.location;
    console.log(location);
    return (
      <div>
        <ul>
          <Router>
            <li>
              <Route exact path="/city" component={city} />
              <Link to={`/city${this.props.location.id}`}>
                {this.props.location.name}
              </Link>
            </li>
          </Router>
        </ul>
      </div>
    );
  }
}
export default Location;
