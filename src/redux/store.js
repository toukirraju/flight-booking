import { createStore } from "redux";
import rootReducer from "./rootReducer";
import bookingReducer from "./ticketBooking/bookingReducer";

const store = createStore(rootReducer);

export default store;
