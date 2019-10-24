import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const usersURL = "http://localhost:3000/users/"
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: window.localStorage.getItem("username"),
      email: window.localStorage.getItem("email"),
      wallet: 0
    }
  }

  handleChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    let formInputs = Object.assign({}, this.state);
    delete formInputs.wallet;
    let configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(formInputs)
    }
    fetch(`${usersURL}${window.localStorage.getItem("id")}`, configObj)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      window.localStorage.setItem("username", json.user.username)
      window.localStorage.setItem("email", json.user.email)
      this.setState({username: json.user.username, email: json.user.email})
    })
    .catch(error => console.log(error))
  }

  componentDidMount(){
    let configObj = {method: "GET", headers: {"Authorization": `Bearer ${window.localStorage.getItem("token")}`}}
    fetch(`${usersURL}${window.localStorage.getItem("id")}`, configObj)
    .then(res => res.json())
    .then(json => {
      this.setState({wallet: json.user.wallet})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h3> Username: {window.localStorage.getItem("username")}</h3>
              <h3> Email: {window.localStorage.getItem("email")}</h3>
              <h4>Wallet Amount: {this.state.wallet}</h4>
            </Col>
            <Col>
              <form onSubmit={event => this.handleSubmit(event)}>
                <label>Edit username</label>
                <input type="text" name="username" onChange={event => this.handleChange(event)} value={this.state.username} />
                <label>Edit email</label>
                <input type="text" name="email" onChange={event => this.handleChange(event)} value={this.state.email} />
                <input type="submit" value="Edit user" />
              </form>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={5}></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
