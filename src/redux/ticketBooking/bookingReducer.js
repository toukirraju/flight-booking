import { TICKET_BOOKING, TICKET_REMOVE } from "./actionTypes";
const initialState = {
  tickets: [],
};
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_BOOKING:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case TICKET_REMOVE:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id != action.payload),
      };

    default:
      return state;
  }
};

export default bookingReducer;
