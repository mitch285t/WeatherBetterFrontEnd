import React, { Component } from "react";
import "../App.css";
import "react-bootstrap";
import Bet from './Bet';

const usersURL = "http://localhost:3000/users/";
const betsURL = "http://localhost:3000/bets";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: window.localStorage.getItem("username"),
      email: window.localStorage.getItem("email"),
      wallet: 0,
      bets: []
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formInputs = Object.assign({}, this.state);
    delete formInputs.wallet;
    let configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(formInputs)
    };
    fetch(`${usersURL}${window.localStorage.getItem("id")}`, configObj)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        window.localStorage.setItem("username", json.user.username);
        window.localStorage.setItem("email", json.user.email);
        this.setState({ username: json.user.username, email: json.user.email });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    let configObj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
    fetch(`${usersURL}${window.localStorage.getItem("id")}`, configObj)
      .then(res => res.json())
      .then(json => {
        this.setState({ wallet: json.user.wallet });
      })
      .catch(error => console.log(error));
    fetch(betsURL, configObj)
    .then(res => res.json())
    .then(json => {
      let user_bets = json.bets.filter(bet => `${bet.user_id}` === window.localStorage.getItem("id"));
      
      this.setState({bets: user_bets.reverse()})
    })
  }
  render() {
    return (
      <div className="body-header">
        {<h3>Username: {window.localStorage.getItem("username")}</h3>}

        {<h3> Email: {window.localStorage.getItem("email")}</h3>}

        {<h4>Wallet Amount: {this.state.wallet}</h4>}
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Edit username</label>
          <input
            type="text"
            name="username"
            onChange={event => this.handleChange(event)}
            value={this.state.username}
          />
          <label>Edit email</label>
          <input
            type="text"
            name="email"
            onChange={event => this.handleChange(event)}
            value={this.state.email}
          />
          <input type="submit" value="Edit user" />
        </form>
        <h3>List of bets</h3>
        <table className="table">
          <caption>List of bets</caption>
          <thead>
            <tr>
              <th scope="col">Time placed</th>
              <th scope="col">Payout</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bets.map(bet => {return(<Bet key={bet.id} bet={bet} />)})}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
