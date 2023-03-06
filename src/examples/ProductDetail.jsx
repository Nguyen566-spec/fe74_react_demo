import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } = this.props.selected;
    return (
      <div className='container'>
        <div className="row">
          <div className="col-5">
            <img src={image} alt="" />
          </div>
          <div className="col-7 text-start">
            <h1>Name: {name}</h1>
            <h2>Price: ${price}</h2>
            <p>Description: {description}</p>
            <p>Inventory: {quantity}</p>
          </div>
        </div>
      </div>
    )
  }
}
