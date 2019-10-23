import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherForecast from "./WeatherForecast.js";
const Locationspage = ({ locations }) => (
  <Router>
    <div>
      <ul>
        {locations.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/locations/${name}`}>{name}</Link>
            <Route path={`/locations/${name}`} render={name => <WeatherForecast name={name} id={id} />} />
          </li>
        ))}
      </ul>
    </div>
  </Router>
);

export default Locationspage;
