import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Weather from "./Weather";
const Locationspage = ({ locations }) => (
  <div>
    <ul>
      {locations.map(({ name, id }) => (
        <li key={id}>
          <Link to={`/Weather`}>{name}</Link>
          <Route path={"/Weather"} render={name => <Weather name={name} />} />
        </li>
      ))}
    </ul>
  </div>
);

export default Locationspage;
