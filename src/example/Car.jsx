import React, { Component } from "react";
import RedCar from "../assets/products/red-car.jpg";
import BlackCar from "../assets/products/black-car.jpg";
import SteelCar from "../assets/products/steel-car.jpg";
import SilverCar from "../assets/products/silver-car.jpg";

export default class Car extends Component {
  state = {
    imgSrc: RedCar,
  };
  changeColor = (img) => {
    this.setState(
      {
        imgSrc: img,
      },
      () => {
        console.log(this.state.imgSrc);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img src={this.state.imgSrc} className="w-100" alt="" />
          </div>
          <div className="col-5">
            <button
              className="btn btn-danger"
              onClick={() => this.changeColor(RedCar)}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => this.changeColor(BlackCar)}
            >
              Black
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => this.changeColor(SteelCar)}
            >
              Steel
            </button>
            <button
              className="btn btn-light"
              onClick={() => this.changeColor(SilverCar)}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
