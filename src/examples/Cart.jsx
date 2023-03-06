import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        // tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shopping cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.product.name}</td>
                      <td>
                        <img src={item.product.image} alt="" width={100} />
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.onDecreaseQuantity(item.product.id);
                          }}
                          className="btn btn-info"
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          onClick={() => {
                            this.props.onIncreaseQuantity(item.product.id);
                          }}
                          className="btn btn-info"
                        >
                          +
                        </button>
                      </td>
                      <td>${item.product.price}</td>
                      <td>${item.product.price * item.quantity}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.onDeleteCartItem(item.product.id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <h1>
                Total: $
                {this.props.data &&
                  this.props.data.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )}
              </h1>
              <button
                onClick={() => this.props.onRemove()}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
