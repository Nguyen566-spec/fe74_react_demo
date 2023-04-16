import { CHAIR_BOOKING, PAY } from "./type";

export const chairBookingAction = (payload) => {
  return {
    type: CHAIR_BOOKING,
    payload,
  };
};

export const payChair = (payload) => {
  return {
    type: PAY,
    payload
  }
}
