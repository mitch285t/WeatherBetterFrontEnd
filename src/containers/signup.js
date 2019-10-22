import React from "react";

const usersURL = 'http://localhost:3000/users'

class Signup extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleChange = (event) => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch(usersURL, configObj)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.log(error))

    this.setState({username: "", email: "", password: "", password_confirmation: ""})
  }


  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <h1>Sign up</h1>
        <div>
          <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username} placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email} placeholder="E-mail" />
          <label htmlFor="username">E-mail</label>
        </div>
        <div>
          <input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password} placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={(event) => this.handleChange(event)}
          />
          <label htmlFor="password">Password confirmation</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}
export default Signup;
