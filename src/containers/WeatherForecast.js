import React, {Component} from 'react';
import Weather from './weather.js'

const RoundsURL = "http://localhost:3000/rounds"

export default class WeatherForecast extends Component {
    constructor(props){
        super(props);
        this.state = {
            rounds: []
        }
    }

    componentDidMount() {
        fetch(RoundsURL, {method: "GET", headers: {Authorization: `Bearer ${window.localStorage.getItem("token")}`}})
        .then(res => res.json())
        .then(data => {
          let rounds = data.rounds.filter(round => round.is_open && round.location_id === this.props.id)
          this.setState({rounds: rounds});
        });
    }
    render(){ 
        return(
          <div className="container">
            <div className="row">
              {this.state.rounds.map(round => {return(<Weather round={round} key={round.id} />)})}
            </div>
          </div>);
    }
} 