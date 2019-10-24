import React from "react";
import Home from "./containers/Home.js";
import "./App.css";
import Navigationbar from "./containers/navigationbar.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <div className="background">
        <div className="body-header vh-100">
          <div>
            <Home className="body-header" />
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
