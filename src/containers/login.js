import React, { Component } from "react";

const authURL = "http://localhost:3000/login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch(authURL, configObj)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        window.localStorage.setItem("token", json.jwt);
        window.localStorage.setItem("username", json.user.username);
        window.localStorage.setItem("email", json.user.email);
        window.localStorage.setItem("id", `${json.user.id}`);
        window.localStorage.setItem("wallet", `${json.user.wallet}`);
      })
      .catch(error => console.log(error));
    this.setState({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      wallet: 1.0
    });
  };

  render() {
    console.log(window.localStorage.getItem("username"));
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <input
            type="text"
            name="username"
            onChange={event => this.handleChange(event)}
            value={this.state.username}
            placeholder="Username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={event => this.handleChange(event)}
            value={this.state.password}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Log in" />
      </form>
    );
  }
}
export default Login;
