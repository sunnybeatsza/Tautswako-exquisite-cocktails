import React from "react";
import { useLocation } from "react-router-dom/dist";
import "./Checkout.css";
import { Navbar } from "../Components/Navbar";
import { CheckoutCard } from "../Components/CheckoutCard";

export const Checkout = () => {
  const location = useLocation();
  const formValues = location.state?.formValues || {};

  return (
    <div>
      <Navbar />
      <div className="checkout-outer-container">
        <div className="checkout-top-container">
          <p>
            Your bag <br />
            TOTAL (4 items): R150.00 <br />
            Quotes expire after 10 days.
          </p>
        </div>
        <div className="checkout-bottom-container">
          <div className="quote-summary">
            <h1>Quote Summary</h1>
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
          </div>
          <div className="quote-total">
            <h1>Quote total</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
