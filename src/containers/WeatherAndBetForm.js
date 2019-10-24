import React, {Component} from 'react';

const betsURL = 'http://localhost:3000/bets'

export default class WeatherAndBetForm extends Component {
  constructor(props){
    super(props);
      this.state = {
        forecast: "",
        temperature: "",
        precip_probability: "",
        wager: ""
      }
  }

  handleChange = (event) => {
    event.persist();
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let body = this.state;
    body.user_id = parseInt(window.localStorage.getItem("id"));
    body.round_id = parseInt(this.props.round.id)
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `Bearer ${window.localStorage.getItem("token")}` 
      },
      body: JSON.stringify(body)
    }
    fetch(betsURL, configObj)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.log(error))
    this.props.viewRound();
  }

  render(){
        return(
            <div className="col-lg border border-dark">
                <p>{this.props.handleTime(this.props.round.time)}</p>
                <p>{this.props.round.forecast}</p>
                <p>Temperature: {this.props.round.temperature}</p>
                <p>{this.props.round.precip_probability}% chance of precipitation</p>
                <h3>Bet on this</h3>
                <form onSubmit={event => this.handleSubmit(event)}> 
                    <label>Forecast</label>
                    <input type="text" name="forecast" value={this.state.forecast} onChange={event => this.handleChange(event)} />
                    <br/>
                    <label>Temperature</label>
                    <input type="number" name="temperature" value={this.state.temperature} onChange={event => this.handleChange(event)} />
                    <br/>
                    <label>Chance of precipitation</label>
                    <input type="number" name="precip_probability" value={this.state.precip_probability} onChange={event => this.handleChange(event)} />
                    <br/>
                    <label>Wager</label>
                    <input type="number" name="wager" value={this.state.wager} onChange={event => this.handleChange(event)} />
                    <br/>
                    <input type="submit" value="Bet" />
                </form>
                <button onClick={this.props.viewRound}>Hide</button>
            </div>
        )
  }
}