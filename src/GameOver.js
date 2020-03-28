import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getScore, timer } from "./redux/actions";

const reset = props => {
  props.timer(60);
  props.getScore(-props.score);
};
const GameOver = props => {
  return (
    <div className="container-fluid">
      <br></br>
      <br></br>
      <br></br>
      <h1>
        <font size="30" color="white">
          GAME OVER
        </font>
      </h1>
      <div className="row">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-4">
          <font size="7" color="white">
            Score : {props.score}
          </font>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div>
            <img
              className="col-6"
              src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/crushed%20pepsi.png"
              alt="pepesi man"
            />
          </div>
          <font size="7" color="white"></font>
        </div>
        <div className="col-4">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link
            to="/home/"
            type="button"
            class="btn btn-outline-light mr-3 btn-lg active"
            onClick={reset(props)}
          >
            Home
          </Link>
          <Link
            to="/start/"
            type="button"
            class="btn btn-outline-light mr-3 btn-lg active"

            // onClick={}
          >
            Try Again
          </Link>
        </div>
        <img
          className="col-4"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/pepsi_man_stop-removebg-preview.png"
          alt="pepesi man"
        />
      </div>
    </div>
  );
};
const mapToStateToProps = state => {
  return {
    score: state.board.score,
    size: state.board.size,
    speed: state.board.speed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    timer: time => dispatch(timer(time)),
    getScore: score => dispatch(getScore(score))
  };
};
export default connect(mapToStateToProps, mapDispatchToProps)(GameOver);
