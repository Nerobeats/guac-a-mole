import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSettings } from "./redux/actions";
import { Slider } from "@material-ui/core";

class Home extends Component {
  state = {
    value: 3,
    speeds: [0.5, 0.4, 0.3, 0.2, 0.1],
    audio: new Audio(
      "https://vgmdownloads.com/soundtracks/pepsiman-psx/vczmkygp/04_Stage%201.mp3"
    )
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  onClick = size => {
    this.props.setSettings(this.state.speeds[this.state.value - 1], size);
  };

  start = () => {
    this.state.audio.pause();
    this.state.audio.currentTime = 0;
    this.state.audio.play();
  };

  render() {
    return (
      <div className="card text-center">
        <br></br>
        <div className="card-header">Coded Live Production</div>
        <div className="card-body">
          <h5 className="card-title">A Guack-A-Mole Creation</h5>
          <p className="card-text">Choose the size, Hit Start and smash!</p>
          <div className="row justify-content-md-center">
            <div className="col-2">
              <br></br>
              Speed
              <Slider
                defaultValue={3}
                marks={true}
                min={1}
                step={1}
                max={5}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </div>
          </div>
          <br></br>
          <div className="row justify-content-md-center">
            <button
              type="button"
              class={
                this.props.size === 2
                  ? "btn btn-warning mr-3 active"
                  : "btn btn-warning mr-3 disabled"
              }
              onClick={() => this.onClick(2)}
            >
              2X2
            </button>
            <button
              type="button"
              class={
                this.props.size === 3
                  ? "btn btn-success mr-3 active"
                  : "btn btn-success mr-3 disabled"
              }
              onClick={() => this.onClick(3)}
            >
              3X3
            </button>
            <button
              type="button"
              class={
                this.props.size === 4
                  ? "btn btn-danger mr-3 active"
                  : "btn btn-danger mr-3 disabled"
              }
              onClick={() => this.onClick(4)}
            >
              4X4
            </button>
          </div>
          <Link
            to="/start/"
            className="btn btn-primary mt-5"
            onClick={this.start}
          >
            start
          </Link>
        </div>
        <div className="card-footer text-muted">
          bring nachos, you'll need them
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSettings: (speed, size) => dispatch(setSettings(speed, size))
  };
};

const mapStateToProps = state => {
  return {
    size: state.board.size
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
