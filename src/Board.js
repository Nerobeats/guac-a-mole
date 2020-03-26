import React, { Component } from "react";
import Hole from "./Hole";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Board extends Component {
  state = {
    score: 0,
    time: 0,
    cycle: true,
    mapping: []
  };

  componentDidMount() {
    this.setState({ mapping: this.mapping(this.props.size) });
    this.interval = setInterval(
      () =>
        this.setState({
          time: Date.now(),
          cycle: !this.state.cycle,
          mapping: this.mapping(this.props.size)
        }),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomNum = size => {
    return Math.floor(Math.random() * (size * size));
  };

  mapping = size => {
    let board = [],
      randNum = this.randomNum(size),
      count = 0;
    for (let j = 0; j < size; j++) {
      let arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(
          <div className="col">
            <div className="text-center">
              <Hole show={count === randNum ? true : false} />
            </div>
          </div>
        );
        count++;
      }
      board.push(<div className="row mt-2">{arr}</div>);
    }
    return board;
  };
  render() {
    return (
      <div>
        <div className="fixed-top text-right">
          <br />
          <Link to="/" className="btn btn-secondary btn-lg">
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="container"> {this.state.mapping}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    size: state.board.size,
    score: state.board.score
  };
};
export default connect(mapStateToProps)(Board);
