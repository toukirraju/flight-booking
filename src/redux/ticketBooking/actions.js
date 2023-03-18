import { TICKET_BOOKING, TICKET_REMOVE } from "./actionTypes";

export const ticketBooking = (value) => {
  return {
    type: TICKET_BOOKING,
    payload: value,
  };
};

export const removeTicket = (value) => {
  return {
    type: TICKET_REMOVE,
    payload: value,
  };
};
