import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="text-center">Đặt vé xem phim</h1>
            <div className="mt-5 bg-dark text-white display-4">Screen</div>
            <ChairList/>
          </div>
          <div className="col-4">
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}
