import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AddressDetails.css";
import { useStateValue } from "./StateProvider";

function AddressDetails() {
  const [{ address }, dispatch] = useStateValue();

  const history = useHistory();
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const savingAddress = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADDRESS",
      address: {
        place: place,
        city: city,
        country: country,
      },
    });

    history.push("/payment");
  };

  return (
    <div className="address__details">
      <Link to="/">
        <img
          className="address__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="address__container">
        <h1>Submit Your Address</h1>

        <form>
          <h5>Address</h5>
          <input
            type="text"
            required="required"
            placeholder="Enter Your Address here"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />

          <h5>City</h5>
          <input
            type="text"
            required="required"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <h5>Country</h5>
          <input
            type="text"
            required="required"
            placeholder="Enter Country Name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <button
            type="submit"
            className="address__submitButton"
            onClick={savingAddress}
          >
            Proceed to Checkout
          </button>
        </form>
        <p>
          1. For optimal utilization of your Amazon Pay balance, balance
          expiring the earliest will be redeemed first.
        </p>
        <p>
          2. Your Amazon Pay balance cannot be used along with Cash on Delivery
          or the EMI payment modes.
        </p>
      </div>
    </div>
  );
}

export default AddressDetails;
