import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSize } from "./redux/actions";
class Home extends Component {
  render() {
    return (
      <div className="card text-center">
        <br></br>
        <div className="card-header">Coded Live Production</div>
        <div className="card-body">
          <h5 className="card-title">A Guack-A-Mole Creation</h5>
          <p className="card-text">Choose the size, Hit Start and smash!</p>

          <div className="row justify-content-md-center">
            <button
              type="button"
              class="btn btn-success mr-3 "
              onClick={() => this.props.setSize(2)}
            >
              2X2
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => this.props.setSize(3)}
            >
              3X3
            </button>
            <button
              type="button"
              class="btn btn-danger ml-3"
              onClick={() => this.props.setSize(4)}
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
    setSize: size => dispatch(setSize(size))
  };
};
export default connect(null, mapDispatchToProps)(Home);
