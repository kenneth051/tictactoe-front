import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import "./body.css";
 const Body = (props)=> {
    return (
      <div className="parent-div">
        <div className="item">X</div>
        <div className="item">O</div>
        <div className="item">O</div>
        <div className="item">X</div>
        <div className="item">X</div>
        <div className="item">O</div>
        <div className="item">X</div>
        <div className="item">O</div>
        <div className="item">O</div>
      </div>
    );
}

export default Body;
