import { combineReducers } from "redux";
// import userReducer from "../admin/duck/reducer";
// import movieBookingReducer from "../movies/movie/reducer";
// import { demoReducer } from "./../toolkit/redux/reducer";
import { demoReduxReducer } from "./../toolkit/redux/slice";

const rootReducer = combineReducers({
  // userReducer,
  // movieBookingReducer,
  // demoReducer,
  demoReduxReducer,
});

export { rootReducer };
