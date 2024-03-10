import React from "react";
import { useLocation } from "react-router-dom/dist";

export const Checkout = () => {
  const location = useLocation();
  const formValues = location.state?.formValues || {};

  return (
    <div>
      <h1>Checkout Page</h1>
      {/* Display and use formValues in your checkout page */}
      <h3>{formValues.Guests}</h3>
      <h3>{formValues.DrinkPref}</h3>
      <h3>{formValues.Venue}</h3>
      <h3>{formValues.Address}</h3>
      <h3>{formValues.DrinkOptions}</h3>
      <h3>{formValues.Duration}</h3>
      <h3>{formValues.DateTime}</h3>
    </div>
  );
};
