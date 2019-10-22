import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Location from "../components/location";

const LocationURL = `http://localhost:3000/locations`;
import Locationspage from "./Locationspage.js";

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
                  locations={this.state.locations}
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
