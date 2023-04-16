import datas from "./../danhSachGhe.json";
import { CHAIR_BOOKING, PAY } from "./type";

const initialState = {
  chairList: datas,
  chairBookingList: [],
};

const movieBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAIR_BOOKING: {
      const data = [...state.chairBookingList];
      const index = data.findIndex(
        (chair) => chair.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(action.payload);
      }
      return { ...state, chairBookingList: data };
    }
    case PAY: {
      const danhSach = state.chairBookingList.map((e) => e.soGhe);
      const data = state.chairList.map((item) => {
        const ds = item.danhSachGhe.map((chair) => {
          if (danhSach.includes(chair.soGhe)) {
            chair.daDat = true;
          }
          return chair;
        });
        return {
          ...item,
          danhSachGhe: ds,
        };
      });
      return {
        ...state,
        chairList: data,
        chairBookingList: [],
      };
    }
    default:
      return state;
  }
};

export default movieBookingReducer;
