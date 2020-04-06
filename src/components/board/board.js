import React, { Component, useState,useEffect } from "react";
import "./board.css";

const Board = (props) => {
  const {game_board}=props
  return (
    <div>
      <div className="parent-div">
        <div className="item item1" onClick={()=>{props.getPosition(1)}}>{game_board[0]}</div>
        <div className="item item2" onClick={()=>{props.getPosition(2)}}>{game_board[1]}</div>
        <div className="item" onClick={()=>{props.getPosition(3)}}>{game_board[2]}</div>
        <div className="item" onClick={()=>{props.getPosition(4)}}>{game_board[3]}</div>
        <div className="item" onClick={()=>{props.getPosition(5)}}>{game_board[4]}</div>
        <div className="item" onClick={()=>{props.getPosition(6)}}>{game_board[5]}</div>
        <div className="item" onClick={()=>{props.getPosition(7)}}>{game_board[6]}</div>
        <div className="item" onClick={()=>{props.getPosition(8)}}>{game_board[7]}</div>
        <div className="item" onClick={()=>{props.getPosition(9)}}>{game_board[8]}</div>
      </div>
    </div>
  );
};

export default Board;
