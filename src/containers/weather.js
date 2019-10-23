import React, { Component } from "react";

class Weather extends Component {
  render() {
    return <div>{console.log(this.props.name)}</div>;
  }
}
export default Weather;
