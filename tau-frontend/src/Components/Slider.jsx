import React from "react";
import Slider from "react-slick";
import Chris1 from "../Assets/Chris1.jpg";
import Chris2 from "../Assets/Chris2.jpg";
import Chris3 from "../Assets/Chris3.jpg";
import Client1 from "../Assets/Client1.jpg";
import Drinks3 from "../Assets/Drinks3.jpg";
import Drinks4 from "../Assets/Drinks4.jpg";

import "./Slider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="custom-slider">
      <div>
        <img src={Chris1} alt="Image 1" />
        <p>Caption 1</p>
      </div>
      <div>
        <img src={Chris2} alt="Image 2" />
        <p>Caption 2</p>
      </div>
      <div>
        <img src={Drinks3} alt="Image 3" />
        <p>Caption 3</p>
      </div>
      <div>
        <img src={Drinks4} alt="Image 4" />
        <p>Caption 4</p>
      </div>
      <div>
        <img src={Client1} alt="Image 5" />
        <p>Caption 5</p>
      </div>
      <div>
        <img src={Chris3} alt="Image 6" />
        <p>Caption 6</p>
      </div>
    </Slider>
  );
}
