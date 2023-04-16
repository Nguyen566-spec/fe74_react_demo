import data from "./../data.json";

const initialState = {
  userList: data,
  keyword: "",
  updateUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER": {
      const userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        userList.splice(index, 1);
      }
      state.userList = userList;
      return { ...state };
    }
    case "SEARCH_USER": {
      state.keyword = action.payload;
      return { ...state };
    }
    case "SUBMIT_USER": {
      const userList = [...state.userList];
      if (action.payload.id) {
        const index = userList.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        const user = { ...action.payload, id: new Date().getTime() };
        userList.push(user);
      }
      state.userList = userList;
      return { ...state };
    }
    case "UPDATE_USER": {
      state.updateUser = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
