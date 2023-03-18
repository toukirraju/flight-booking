import "./App.css";
import logo from "./assets/img/TR.png";
import frame from "./assets/img/icons/Frame.svg";
import Vector1 from "./assets/img/icons/Vector (1).svg";
import Vector3 from "./assets/img/icons/Vector (3).svg";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ticketBooking } from "./redux/ticketBooking/actions";

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.bookedTicket.tickets);
  const [state, setState] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setState((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    dispatch(
      ticketBooking({
        ...state,
        id: Math.floor(new Date().getTime().toString()),
      })
    );
  };
  useEffect(() => {
    setState({
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
    });
  }, [tickets]);

  return (
    <div>
      <header id="header">
        <div class="container">
          <img src={logo} alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
          <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form class="first-hero lws-inputform" onSubmit={handleSubmit}>
              {/* <!-- From --> */}
              <div class="des-from">
                <p>Destination From</p>
                <div class="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    onChange={handleChange}
                    value={state.from}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div class="des-from">
                <p>Destination To</p>
                <div class="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    onChange={handleChange}
                    value={state.to}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div class="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  class="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  onChange={handleChange}
                  value={state.date}
                />
              </div>

              {/* <!-- Guests --> */}
              <div class="des-from">
                <p>Guests</p>
                <div class="flex flex-row">
                  <img src={Vector1} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    onChange={handleChange}
                    value={state.guests}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div class="des-from !border-r-0">
                <p>Class</p>
                <div class="flex flex-row">
                  <img src={Vector3} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                    onChange={handleChange}
                    value={state.ticketClass}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                class={tickets.length === 3 ? "disableButton" : "addCity"}
                type="submit"
                id="lws-addCity"
                disabled={tickets.length === 3}
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span class="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <Table data={tickets} />
      </section>
    </div>
  );
}

export default App;
