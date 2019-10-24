import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";
const LocationsList = ({ locations }) => {
  const renderLocations = Object.keys(locations).map(locationID => (
    <Button variant="secondary">
      <Link
        className="white-font"
        key={locationID}
        to={`/locations/${locationID}`}
      >
        {locations[locationID].name}
      </Link>
    </Button>
  ));
  return <div>{renderLocations}</div>;
};
export default LocationsList;
