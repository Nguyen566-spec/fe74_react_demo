import { DELETE_USER } from "./type";

export const actionDeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
