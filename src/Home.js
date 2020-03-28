import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSettings } from "./redux/actions";
import { Slider } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#ffffff",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  valueLabel: {
    "& *": {
      color: "#000",
      backgroundColor: "#fff"
    }
  }
})(Slider);

class Home extends Component {
  state = {
    value: 3,
    speeds: [0.5, 0.4, 0.3, 0.2, 0.1],
    size: 3
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  onClick = size => {
    this.setState({ size });
  };
  setSettings = () => {
    this.props.setSettings(
      this.state.speeds[this.state.value - 1],
      this.state.size
    );
  };

  render() {
    return (
      <div>
        <br></br>
        {/* {
          <font className="col-6" size="7" color="white">
            <br></br>
            Whack-A-
          </font> */}
        <img
          className="col-4"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/WHACK-A-%20(2).png"
          alt="pepesi man"
        />
        <img
          className="col-1"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/bebsi-nobg.png"
          alt="pepesi man"
        />
        <div>
          <h5>A Guack-A-Mole Creation</h5>
          <p>Choose the size, Hit Start and smash!</p>
          <div className="row justify-content-md-center border-0">
            <div className="col-2">
              <br></br>
              <font size="5" color="white">
                speed
              </font>
              <PrettoSlider
                defaultValue={3}
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
                this.state.size === 2
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
                this.state.size === 3
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
                this.state.size === 4
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
          <Link
            to="/start/"
            className="btn btn-outline-light btn-lg mr-3 "
            onClick={this.setSettings}
          >
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
