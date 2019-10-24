import React, { Component } from "react";
import moment from "moment";
import WeatherAndBetForm from "./WeatherAndBetForm.js";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/CardGroup";
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFull: false
    };
  }

  handleTime = time => {
    let date = new Date(time * 1000);
    return moment(date).format("MMMM Do YYYY, HH:mm");
  };

  viewRound = () => {
    this.setState({ showFull: !this.state.showFull });
    console.log("viewround was called");
    console.log(this.state);
  };

  render() {
    if (!this.state.showFull) {
      return (
        <div className="col-sm table-color">
          {this.handleTime(this.props.round.time)}

          <button className="btn btn-info" onClick={this.viewRound}>
            View Round
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <WeatherAndBetForm
            viewRound={this.viewRound}
            handleTime={this.handleTime}
            round={this.props.round}
          />
        </div>
      );
    }
  }
}
export default Weather;
