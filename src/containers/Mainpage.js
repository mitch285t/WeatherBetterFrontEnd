import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Locationspage from "./Locationspage.js";
import Button from "react-bootstrap/Button";
const LocationURL = `http://localhost:3000/locations`;

class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetch(LocationURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
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
          <div className="list-color">
            <Button variant="secondary">
              <Link className="white-font" to="/Locationspage">
                Locations
              </Link>
            </Button>

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
