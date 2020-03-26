import React from "react";
import "./App.css";
import Home from "./Home";
import Board from "./Board";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/" component={Home} />
        <Route path="/start/" component={Board} />
        <Redirect to="/home/" />
      </Switch>
    </div>
  );
};

// 7otto kolo ya 3abood
const mapStateToProps = state => {
  return {
    speed: state.board.speed
  };
};
export default connect(mapStateToProps)(App);
