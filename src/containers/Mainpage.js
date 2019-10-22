import React, { Component } from "react";
import Weather from "./weather.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Location from "../components/location";

const LocationURL = `http://localhost:3000/locations`;

class Mainpage extends Component {
  constructor(){
    super();
    this.state = {
      locations: []
    }
  }

  componentDidMount(){
    fetch(LocationURL, {method: "GET", headers: {Authorization: `Bearer ${window.localStorage.getItem("token")}`}})
    .then(res => res.json())
    .then(data => {
      this.setState({
        locations: data.locations
      });
    });
  }


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
          {this.state.locations.map(function(location) {
            return <Location location={location} />;
          })}
        </div>
      </div>
    );
  }
}
export default Mainpage;
