import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../Elements/Expo.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Expo_1 from "../../images/Expo-2024-1.webp";
import Expo_2 from "../../images/Expo-2024-2.jpeg";

const Expo_Carousel = () => {
  return (
    <>
      <div className="pt-10 title-underline-3 lg:mb-10">
        <div className="text-center font-bold text-3xl text-[rgb(3,74,102)]">
          8<sup>TH</sup> EDITION OF WAPTAG WATER EXPO 2024
        </div>
      </div>
      <div className="py-12 px-3 lg:px-72 lg:py-16 md:px-24 md:py-20">
      <Splide className="p-0"
        options={{
          rewind: true,
          width: "100%",
          height: "100%",
          pauseOnHover: false,
          type: "loop",
          autoplay: true,
          interval: 4000,
          pagination: false,
          arrows: false,
          speed: 1500,
        }}
        aria-label=""
      >
        <SplideSlide>
          <div className="" style={{ margin: "0 auto" }}>
            <img
              className=""
              src={Expo_1}
              alt="Image 1"
              style={{ width: "100%" }}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="" style={{ margin: "0 auto" }}>
            <img
              className=""
              src={Expo_2}
              alt="Image 1"
              style={{ width: "100%" }}
            />
          </div>
        </SplideSlide>
      </Splide>
        </div>
      <section className="expo-content-wrapper lg:px-40 md:px-16 bg-[#f2f2f2] py-20 px-6 lg:mt-10">
        <div className="mx-auto text-3xl font-bold underline underline-offset-8 text-[rgb(3,74,102)] font-[Montserrat] pb-2">EXPO 2024</div>
        <div className="expo-content text-center text-l">
          <p className="">
            The 8th Edition of <b>WAPTAG</b> Water Expo is a highly anticipated
            event that brings together professionals, experts, policymakers, and
            enthusiasts from the water industry. This prestigious expo aims to
            foster discussions, collaborations, and advancements in water
            management, conservation, and technology. With a focus on
            sustainability and innovation, the event promises to be a
            transformative experience for attendees.
          </p>
          <div className="pt-5">
            <b>WAPTAG</b> is one of the most unique and comprehensive water industry
            platforms in India, engaging with latest technologies in the water
            and waste-water management services. WAPTAG Water Expo is a
            conglomeration of professionals and experts from the water industry
            dealing in different sectors manufacturers, traders, importers,
            and service providers engaged in activities related to water
            purification and treatment; residential, commercial as well as
            industrial water filtration plant; wastewater treatment plants;
            domestic and industrial RO plants, etc. It brings together the whole
            industry under the same roof and provides a unique opportunity to
            share business opportunities, network and explore innovative water
            solutions. WAPTAG Water Expo 2024 is going to be the most advanced,
            largest, and most unique and inclusive in terms of exhibitors
            profile and broad industry segment coverage, showcasing latest
            technologies in water and wastewater management sector of Indian and
            international markets.
          </div>
          <div className="pt-5">
            <b>Exhibitor Product Profile: </b>Water, Chemicals, Filter Cartridges, Pressure Vessels, Chemicals, Filer Media, Filter Presses, Blowers, Boilers, Cooling Towers, Diffusers, Aerators, Domestic Water Purifiers, Accessories & Spares. Water Storage, Transportation & Distribution :- Tanks, Pumps, Motors, Pipes & Tubes, Fittings & Valves, Pressure Boosting, Rainwater Harvesting.
          </div>
          <div className="pt-7">
            <span className="font-bold">Event Dates:</span> 29th February
            and 1st - 2nd March 2024
          </div>
          <div className="">
            <span className="font-bold">Location:</span> Mahatma Mandir,
            Gandhinagar, Gujarat, India
          </div>
        </div>
        {/* <div className="expo-dates">
        </div> */}
      </section>

      {/* <hr style={{padding:"30px",margin : "15px 30px"}}/> */}
    </>
  );
};

export default Expo_Carousel;
