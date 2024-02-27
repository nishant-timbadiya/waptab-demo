import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../Elements/Carousel.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Exhi_1 from "../../images/exhi-1.jpeg";
import Exhi_2 from "../../images/exhi-2.jpeg";
import Exhi_3 from "../../images/exhi-3.jpg";
import Exhi_4 from "../../images/exhi-4.jpg";
import Exhi_5 from "../../images/exhi-5.jpg";
import Exhi_6 from "../../images/exhi-6.jpg";

const Past_Exhibitors = () => {
  return (
    <>
      <div className="exhibitors-title  text-center mt-10 ">
        <span className="title-underline-5">Our Past</span> Exhibitions
      </div>
      <Splide
        options={{
    rewind: true,
    width: "100%",
    height: "100%", // Set a fixed height or change as needed
    pauseOnHover: false,
    type: "loop",
    drag: "free",
    autoplay: true,
    pagination: false,
    arrows: false,
    gap: "10px",
    perPage: 3,
    focus: "center",
    autoScroll: {
      speed: 10,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      1025: {
        perPage: 2,
      },
      1200: {
        perPage: 3,
      },
    },
  }}
        aria-label="My Favorite Images"
        className="mx-auto"
      >
        <SplideSlide>
          <img src={Exhi_1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={Exhi_2} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={Exhi_3} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={Exhi_4} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={Exhi_5} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={Exhi_6} alt="Image 1" />
        </SplideSlide>{" "}
        {/* <SplideSlide>
          <img src={waptab_img} alt="Image 1" />
        </SplideSlide>{" "} */}
        {/* <SplideSlide>
          <img src={carousel_img1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={waptab_img} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={carousel_img1} alt="Image 3" />
        </SplideSlide> */}
      </Splide>
    </>
  );
};

export default Past_Exhibitors;
