import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h3> Username: {window.localStorage.getItem("username")}</h3>
              <h3> Email: {window.localStorage.getItem("email")}</h3>
              <h4>Wallet Amount: {window.localStorage.getItem("wallet")}</h4>
            </Col>
            <Col xs={6}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
