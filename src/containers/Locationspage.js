import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Weather from "./weather.js";
const Locationspage = ({ locations }) => (
  <div>
    <ul>
      {locations.map(({ name, id }) => (
        <li key={id}>
          <Link to={`/Weather`}>{name}</Link>
          <Route path={"/Weather"} render={<Weather id={id} />} />
        </li>
      ))}
    </ul>
  </div>
);

export default Locationspage;
