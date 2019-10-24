import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const betsURL = "http://localhost:3000/bets";

export default class WeatherAndBetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: "",
      temperature: "",
      precip_probability: "",
      wager: ""
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let body = this.state;
    body.user_id = parseInt(window.localStorage.getItem("id"));
    body.round_id = parseInt(this.props.round.id);
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(body)
    };
    fetch(betsURL, configObj)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => console.log(error));
    this.props.viewRound();
  };

  render() {
    return (
      <div className="col-lg border border-dark">
        <p>{this.props.handleTime(this.props.round.time)}</p>
        <p>{this.props.round.forecast}</p>
        <p>Temperature: {this.props.round.temperature}</p>
        <p>{this.props.round.precip_probability}% chance of precipitation</p>
        <h3>Bet on this</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Row>
              <Form.Label>Forecast</Form.Label>
              <Form.Control
                type="text"
                name="forecast"
                value={this.state.forecast}
                placeholder="small text"
                onChange={event => this.handleChange(event)}
              />
              <br />
              <Form.Label>Temperature</Form.Label>
              <Form.Control
                type="number"
                name="temperature"
                value={this.state.temperature}
                placeholder="small text"
                onChange={event => this.handleChange(event)}
              />
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label>Chance of precipitation</Form.Label>
              <Form.Control
                type="number"
                name="precip_probability"
                value={this.state.precip_probability}
                placeholder="small text"
                onChange={event => this.handleChange(event)}
              />
              <br />
              <Form.Label>Wager</Form.Label>
              <Form.Control
                type="number"
                name="wager"
                value={this.state.wager}
                placeholder="large text"
                onChange={event => this.handleChange(event)}
              />
              <br />
            </Form.Row>
            {/* <Form.Control type="submit" value="Bet" /> */}
            <Button variant="secondary" type="submit" value="Bet">
              Submit
            </Button>
          </Form.Group>
        </form>
        <Button variant="secondary" onClick={this.props.viewRound}>
          Hide
        </Button>
      </div>
    );
  }
}
