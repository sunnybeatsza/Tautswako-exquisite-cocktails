import React from "react";
import "./Quote.css";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export const Quote = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="quote-outer-container">
        <div className="quote-container">
          <h1 className="text-white mb-3">Get a Quote!</h1>
          <button className="btn btn-primary text-light mb-3" onClick={GoBack}>
            Go Back
          </button>
          <form action="">
            <h3>Guests</h3>
            <div className="quote-container-top">
              <label htmlFor="">How many people are going to be there?</label>
              <br />
              <select name="Guests-size" id="Guests-size" className="my-3">
                <option value="25-50">25 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100-150">100 - 150</option>
                <option value="200+">200+</option>
              </select>
              <br />
              <hr />

              <h3>Drink Preference</h3>
              <label htmlFor="" className="me-2 my-3">
                Alcoholic
              </label>
              <input type="radio" className="me-2 my-3" />
              <label htmlFor="" className="me-2 my-3">
                Non-Alcoholic
              </label>
              <input type="radio" className="me-2 my-3" />
            </div>
            <hr />
            <div>
              <h3>Venue</h3>
              <label htmlFor="" className="me-2 my-3">
                Indoor
              </label>
              <input type="radio" className="me-2 my-3" />

              <label htmlFor="" className="me-2 my-3">
                Outdoor
              </label>
              <input type="radio" className="me-2 my-3" />
              <br />
              <label htmlFor="" className="me-2 my-3">
                Address:
              </label>
              <input type="textarea" />
            </div>
            <hr />
            <div>
              <h3>Drinks Preferences</h3>
              <label htmlFor="" className="me-2">
                Vodka
              </label>
              <input type="checkbox" className="me-2" />

              <label htmlFor="" className="me-2">
                Gin
              </label>
              <input type="checkbox" className="me-2" />

              <label htmlFor="" className="me-2 ">
                Juice
              </label>
              <input type="checkbox" className="me-2" />
              <br />

              <label htmlFor="" className="me-2 ">
                Wine
              </label>
              <input type="checkbox" className="me-2" />

              <label htmlFor="" className="me-2 ">
                Rum
              </label>
              <input type="checkbox" className="me-2" />

              <label htmlFor="" className="me-2 ">
                Tequila
              </label>
              <input type="checkbox" className="me-2" />
            </div>
            <hr />
            <div>
              <h3>Duration</h3>
              <label htmlFor="" className="me-2 my-3">
                2 hours
              </label>
              <input type="radio" className="me-2 my-3" />
              <label htmlFor="" className="me-2 my-3">
                4 hours
              </label>
              <input type="radio" className="me-2 my-3" />

              <label htmlFor="" className="me-2 my-3">
                6 hours
              </label>
              <input type="radio" className="me-2 my-3" />
              <label htmlFor="" className="me-2 my-3">
                8 hours
              </label>
              <input type="radio" className="me-2 my-3" />
            </div>
            <hr />
            <div>
              <h3>Date/Time</h3>
              <label for="birthdaytime" className="me-2">
                When is the event?:
              </label>
              <input type="date" id="birthdaytime" name="birthdaytime" />
            </div>
            <hr />
            <button className="btn btn-primary">Checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
};
