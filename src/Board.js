import React from "react";
import Hole from "./Hole";
import { connect } from "react-redux";
function mapping(size) {
  let arr = [];
  let board = [];
  for (let i = 0; i < size; i++) {
    arr.push(
      <div className="col">
        <div className="text-center">
          <Hole />
        </div>
      </div>
    );
  }

  for (let i = 0; i < size; i++) {
    board.push(<div className="row mt-2">{arr}</div>);
  }
  return board;
}
function Board(props) {
  return <div className="container">{mapping(props.size)}</div>;
}
const mapStateToProps = state => {
  return {
    size: state.board.size
  };
};
export default connect(mapStateToProps)(Board);
