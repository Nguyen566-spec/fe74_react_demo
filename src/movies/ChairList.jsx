import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

class ChairList extends Component {
  render() {
    console.log(this.props);
    const { chairList } = this.props;
    return (
      <div className="d-flex flex-column align-items-center" style={{ gap: 20 }}>
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center" style={{ gap: 20 }}>
              {item.hang}
              {item.danhSachGhe.map((chair) => {
                return <Chair key={chair.soGhe} chair={chair}/>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.movieBookingReducer.chairList,
  };
};

export default connect(mapStateToProps)(ChairList);
