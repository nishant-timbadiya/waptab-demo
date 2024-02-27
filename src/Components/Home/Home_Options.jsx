import React from "react";
import Option from "./Option";
import "../../Elements/Carousel.css";
import Expo from "../../images/expo.png";
import IAPMO from "../../images/iapmo.png";
import Facilites from "../../images/facilites.jpg";
import Activites from "../../images/activites.jpg";

const Home_Options = () => {
  return (
    <>
      <div className="options justify-center grid grid-cols-1 lg:grid-cols-4 gap-6 lg:px-10 md:px-10 py-10 pb-12">
        <div className="mx-auto lg:w-auto">
          <Option
            content={"Waptag Expo"}
            img={Expo}
            content_p={
              "The 8th Edition of WAPTAG Water Expo is a highly anticipated event that brings together professionals, experts, policymakers, and enthusiasts from the water industry."
            }
          />
        </div>
        <div className="mx-auto lg:w-auto">
          <Option
            content={"IAMPO"}
            img={IAPMO}
            content_p={
              "IAPMO India Private Limited, India (IAPMO-I) is devoted to the health, safety, and welfare of the people of India and, is an Indian corporation established to develop and promote IAPMO."
            }
          />
        </div>
        <div className="mx-auto lg:w-auto">
          <Option
            content={"Activities"}
            img={Activites}
            content_p={
              "WAPTAG - IAMPO India has launched “Certified Service Technician'' (CST) program for Residential water treatment systems. This program is intended for Installer and Service Technicians in the residential water segment."
            }
          />
        </div>
        <div className="mx-auto lg:w-auto">
          <Option
            content={"Facilities"}
            img={Facilites}
            content_p={
              "Members of WAPTAG can use the conference room, training room, and meeting room with enthusiasm for their business. They can notify the date and time for usage. WAPTAB provides a modern air-conditioned facility with all the necessary amenities"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home_Options;
