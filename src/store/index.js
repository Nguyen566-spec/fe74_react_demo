// import { createStore } from "redux";
import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export { store };

export const store = configureStore({
  reducer: rootReducer,
})
