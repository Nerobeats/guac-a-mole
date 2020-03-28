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
    this.state.audio.volume = 0.5;
    this.state.audio.pause();
    this.state.audio.currentTime = 0;
    this.state.audio.play();
  };

  render() {
    return (
      <div>
        <br></br>
        <font size="7" color="white">
          <br></br>
          Coded Live Production
        </font>
        <div>
          <h5>A Guack-A-Mole Creation</h5>
          <p>Choose the size, Hit Start and smash!</p>
          <div className="row justify-content-md-center border-0">
            <div className="col-2">
              <br></br>
              <font size="5" color="white">
                speed
              </font>
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
          <div className="row justify-content-md-center border-0">
            <button
              type="button"
              class={
                this.props.size === 2
                  ? "btn btn-outline-light mr-3 btn-lg active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(2)}
            >
              2X2
            </button>
            <button
              type="button"
              class={
                this.props.size === 3
                  ? "btn btn-outline-light mr-3 btn-lg active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(3)}
            >
              3X3
            </button>
            <button
              type="button"
              class={
                this.props.size === 4
                  ? "btn btn-outline-light btn-lg mr-3 active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(4)}
            >
              4X4
            </button>
          </div>
          <br />
          <br />
          <Link to="/start/" className="btn btn-outline-light btn-lg mr-3 ">
            <font size="5">start</font>
          </Link>
        </div>
        <div>bring nachos, you'll need them</div>
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
