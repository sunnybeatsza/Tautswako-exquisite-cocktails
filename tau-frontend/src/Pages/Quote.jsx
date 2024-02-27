import React from "react";
import "./Quote.css";
import { Navbar } from "../Components/Navbar";

export const Quote = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-white mb-5">Get a Quote!</h1>
      <div className="quote-outer-container">
        <div className="quote-container">
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
            </div>
            <hr />
            <div>
              <h3>Drinks Preferences</h3>
            </div>
            <hr />
            <div>
              <h3>Duration</h3>
            </div>
            <hr />
            <div>
              <h3>Date/Time</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
