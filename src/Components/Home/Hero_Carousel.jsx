import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "../../Elements/Carousel.css";
import Home_1 from "../../images/home-1.png";
import Home_2 from "../../images/home-2.png";
import Home_3 from "../../images/home-3.jpg";

const Hero_Carousel = () => {
  return (
    <div className="hero-carousel">
    <Splide
      options={{
        rewind: true,
        width: "100%",
        height: "100%",
        pauseOnHover: false,
        type: "loop",
        autoplay: true, // Set autoplay to true
        interval: 2500, // Optionally, set the interval between slides in milliseconds (default is 5000)
        pagination: false,
        arrows: false,
        speed: 1200,
      }}
      aria-label="My Favorite Images"
      className="mx-auto "
    >
      <SplideSlide className="">
        <img
          className=""
          src={Home_1}
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={Home_3}
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={Home_2}
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default Hero_Carousel;
