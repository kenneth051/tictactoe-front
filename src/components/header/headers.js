import React, { Component } from "react";
import "./header.css";
import { Navbar } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" className="nav justify-content-center header">
          <h1>Simple Tic-Tac-Toe</h1>
        </Navbar>
      </div>
    );
  }
}

export default Header;
