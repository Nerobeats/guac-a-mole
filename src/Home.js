import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="card text-center">
      <br></br>
      <div className="card-header">Coded Live Production</div>
      <div className="card-body">
        <h5 className="card-title">A Guack-A-Mole Creation</h5>
        <p className="card-text">Hit Start and smash!</p>
        <Link to="/start/" className="btn btn-primary">
          start
        </Link>
      </div>
      <div className="card-footer text-muted">
        bring nachos, you'll need them
      </div>
    </div>
  );
}
export default Home;
