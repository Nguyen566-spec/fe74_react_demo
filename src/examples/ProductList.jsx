import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((item) => (
            <div key={item.id} className="col-3">
              <ProductItem
                onAddToCart={this.props.onAddToCart}
                setSelected={this.props.setSelected}
                product={item}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
