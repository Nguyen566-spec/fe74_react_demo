import React, { Component } from "react";
import "./Chair.css";
import clsx from "clsx";
import { connect } from "react-redux";
import { chairBookingAction } from "./movie/action";

class Chair extends Component {
  render() {
    const { chair, chairBookingList, bookingChair } = this.props;
    return (
      <button
        className={clsx("chair btn-success", {
          booked: chair.daDat,
          booking: chairBookingList.find((item) => item.soGhe === chair.soGhe),
        })}
        disabled={chair.daDat}
        onClick={() => {
          bookingChair(chair);
        }}
      >
        {chair.soGhe}
      </button>
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
    bookingChair: (payload) => {
      dispatch(chairBookingAction(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
