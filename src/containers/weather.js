import React, { Component } from "react";
import moment from "moment";

class Weather extends Component {

  handleTime = (time) => {
    let date = new Date(time * 1000);
    return moment(date).format("MMMM Do YYYY, HH:mm")
  }
  render() {
    return(<div className="col-sm border border-dark">{this.handleTime(this.props.round.time)}</div>)
  }
}
export default Weather;
