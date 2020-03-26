import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSettings } from "./redux/actions";
import { Slider } from "@material-ui/core";

class Home extends Component {
  state = {
    value: 3,
    speeds: [0.5, 0.4, 0.3, 0.2, 0.1]
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  onClick = size => {
    this.props.setSettings(this.state.speeds[this.state.value - 1], size);
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
            <div className="col-3">
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
              class="btn btn-success mr-3 "
              onClick={() => this.onClick(2)}
            >
              2X2
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => this.onClick(3)}
            >
              3X3
            </button>
            <button
              type="button"
              class="btn btn-danger ml-3"
              onClick={() => this.onClick(4)}
            >
              4X4
            </button>
          </div>

          <Link to="/start/" className="btn btn-primary mt-5">
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
export default connect(null, mapDispatchToProps)(Home);
