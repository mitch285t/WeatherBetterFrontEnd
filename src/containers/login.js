import React, { Component } from "react";

const authURL = "http://localhost:3000/login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
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
        if(!json.hasOwnProperty('error')) {
          console.log(json);
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("email", json.user.email);
          window.localStorage.setItem("id", `${json.user.id}`);
          window.localStorage.setItem("wallet", `${json.user.wallet}`);
          window.location.assign("http://localhost:3001/main")
        }
        else {
          this.setState({error: json.error})
        }
      })
      .catch(error => console.log(error));
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    console.log(window.localStorage.getItem("username"));
    return (
      <div>
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
        {this.state.error.length > 0 ? <p>{this.state.error}</p> : null}
      </div>
    );
  }
}
export default Login;
