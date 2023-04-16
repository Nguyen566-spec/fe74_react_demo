import React, { Component } from "react";
import { connect } from "react-redux";
import { payChair } from "./movie/action";

class Result extends Component {
  render() {
    const { chairBookingList, payChairBooking } = this.props;
    return (
      <div className="mt-4">
        <p>Danh sách ghế đang chọn</p>
        <div className="d-flex align-items-center">
          <h1>
            <span className="badge bg-success text-success">L</span>
          </h1>
          <p className="ms-4">Ghế có thể đặt</p>
        </div>
        <div className="d-flex align-items-center">
          <h1>
            <span className="badge bg-warning text-warning">L</span>
          </h1>
          <p className="ms-4">Ghế đang đặt</p>
        </div>
        <div className="d-flex align-items-center">
          <h1>
            <span className="badge bg-danger text-danger">L</span>
          </h1>
          <p className="ms-4">Ghế đã đặt</p>
        </div>
        <table className="mt-5 table">
          <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Số ghế</th>
              <th>Giá tiền</th>
            </tr>
          </thead>
          <tbody>
            {chairBookingList.map((chair, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{chair.soGhe}</td>
                <td>{chair.gia} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          Tổng tiền:{" "}
          {chairBookingList.reduce((total, chair) => total + chair.gia, 0)} VND
        </div>
        <button className="btn btn-success" onClick={payChairBooking}>
          Thanh toán
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairBookingList: state.movieBookingReducer.chairBookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    payChairBooking: () => {
      dispatch(payChair());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
