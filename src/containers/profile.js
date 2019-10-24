import React, { Component } from "react";
import "../App.css";
import "react-bootstrap";
class Profile extends Component {
  render() {
    return (

      <div className="body-header">
        {<h3>Username: {window.localStorage.getItem("username")}</h3>}

        {<h3> Email: {window.localStorage.getItem("email")}</h3>}

        {<h4>Wallet Amount: {window.localStorage.getItem("wallet")}</h4>}


      </div>
    );
  }
}

export default Profile;
