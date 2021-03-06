import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherForecast from "./WeatherForecast.js";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Locationspage = ({ locations }) => (
  <Router>
    <div className="list-color clearfix">
      <ListGroup>
        <ListGroup.Item variant="secondary">
          {locations.map(({ name, id }) => (
            <>
              <li>
                <Link className="list-color" key={id} to={`/locations/${name}`}>
                  {name}
                </Link>
              </li>
              <Route
                path={`/locations/${name}`}
                render={name => <WeatherForecast name={name} id={id} />}
              />
            </>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  </Router>
);

export default Locationspage;
