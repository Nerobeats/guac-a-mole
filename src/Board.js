import React from "react";
import Hole from "./Hole";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function mapping(size) {
  let board = [];
  for (let j = 0; j < size; j++) {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
      );
    }
    board.push(<div className="row mt-2">{arr}</div>);
  }
  return board;
}
function Board(props) {
  return (
    <div>
      <div className="fixed-top text-right">
        <br />
        <Link to="/" className="btn btn-secondary btn-lg">
          Home
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="container"> {mapping(props.size)}</div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    size: state.board.size
  };
};
export default connect(mapStateToProps)(Board);
