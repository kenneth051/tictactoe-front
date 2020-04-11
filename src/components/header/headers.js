import React, { Component } from "react";
import "./header.css";
import { Navbar } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div className=" header">
          <h1>Simple Tic-Tac-Toe</h1>
      </div>
    );
  }
}

export default Header;
