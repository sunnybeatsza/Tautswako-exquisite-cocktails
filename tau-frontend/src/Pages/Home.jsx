import React from "react";
import { Navbar } from "../Components/Navbar";
import SimpleSlider from "../Components/Slider";
import { Hero } from "../Components/Hero";

export const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div>
        <Hero />
      </div>
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
};
