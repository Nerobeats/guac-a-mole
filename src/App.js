import React from "react";
import "./App.css";
import Home from "./Home";
import Board from "./Board";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/" component={Home} />
        <Route path="/start/" component={Board} />
        {/* <Route
          path="/"
          render={props => <MoviesList {...props} movies={movies} />} */}
        />
        <Redirect to="/home/" />
      </Switch>
    </div>
  );
}

export default App;
