import React, { Component } from "react";
import { getScore } from "./redux/actions";
import { connect } from "react-redux";

export class Hole extends Component {
  state = {
    up: false,
    counter: 0,
    clicked: true
  };

  peep = () => {
    if (this.state.counter < 2) {
      this.setState({ up: !this.state.up, counter: (this.state.counter += 1) });
    } else {
      this.setState({ counter: 0, clicked: true });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.peep, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  whack = () => {
    if (this.state.clicked) {
      this.props.getScore(1);
    }
    this.setState({ clicked: false });
  };

  render() {
    const mole = (
      <img
        src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/bebsi-nobg.png"
        alt="mole"
        className={this.state.up ? "mole-pic-up" : "mole-pic-down"}
        onClick={this.whack}
      />
    );
    return (
      <div className="box">
        {this.props.show ? mole : <></>}
        <img
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/hiclipart.com.png"
          alt="mound"
          className="mound-pic"
        />
        <div className="mask"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.board.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getScore: score => dispatch(getScore(score))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hole);
