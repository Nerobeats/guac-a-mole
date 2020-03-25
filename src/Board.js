import React from "react";
import Hole from "./Hole";

function Board() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>

        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>

        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>

        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <Hole />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Board;
