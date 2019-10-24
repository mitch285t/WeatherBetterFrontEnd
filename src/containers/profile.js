import React, { Component } from "react";
import "../App.css";
import "react-bootstrap";
class Profile extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="body-header">
        {<h3>Username: {window.localStorage.getItem("username")}</h3>}

        {<h3> Email: {window.localStorage.getItem("email")}</h3>}

        {<h4>Wallet Amount: {window.localStorage.getItem("wallet")}</h4>}
=======
      <div>
        <Container>
          <Row>
            <Col>
              <h3> Username: {window.localStorage.getItem("username")}</h3>
              <h3> Email: {window.localStorage.getItem("email")}</h3>
              <h4>Wallet Amount: {window.localStorage.getItem("wallet")}</h4>
            </Col>
            <Col xs={6}></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={5}></Col>
            <Col></Col>
          </Row>
        </Container>
>>>>>>> origin/master
      </div>
    );
  }
}

export default Profile;
