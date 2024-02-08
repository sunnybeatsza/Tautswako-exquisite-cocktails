import React from "react";
import { Navbar } from "../Components/Navbar";
import SimpleSlider from "../Components/Slider";

export const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <p>Tautswako Exquisite cocktails</p>
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
};
