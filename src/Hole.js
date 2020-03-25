import React, { Component } from "react";

export class Hole extends Component {
  state = {
    up: false,
    counter: 0,
    clicked: true,
    score: 0
  };

  // const randomTime = (min, max) => {
  //   Math.round(Math.random() * (max - min) + min);
  // };
  // const randomMole = moles => {
  //   const idx = Math.floor(Math.random() * this.moleNumer);
  // };

  peep = () => {
    if (this.state.counter < 2) {
      this.setState({ up: !this.state.up, counter: (this.state.counter += 1) });
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
      this.setState({ score: (this.state.score += 1) });
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
        <div class="mask"></div>
      </div>
    );
  }
}

export default Hole;
