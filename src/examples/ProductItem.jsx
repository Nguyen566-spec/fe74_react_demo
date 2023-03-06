import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.product;
    return (
      <div className="card p-3 mb-4">
        <img src={image} alt="" />
        <h5>{name}</h5>
        <p>${price}</p>
        <div className="d-flex justify-content-evenly">
          <button
            onClick={() => {
              this.props.setSelected(this.props.product);
            }}
            className="btn btn-primary"
          >
            Detail
          </button>
          <button
            onClick={() => {
              this.props.onAddToCart(this.props.product);
            }}
            className="btn btn-danger"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
