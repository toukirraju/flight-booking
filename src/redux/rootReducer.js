import { combineReducers } from "redux";
import bookingReducer from "./ticketBooking/bookingReducer";

const rootReducer = combineReducers({
  bookedTicket: bookingReducer,
});

export default rootReducer;
