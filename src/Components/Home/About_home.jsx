import React from "react";
import '../../Elements/About_home.css'
import First from "../../images/about-1.jpg";
import Second from "../../images/about-2.jpg";
import { NavLink } from "react-router-dom";
import Vision from "../../images/vision.jpg";
import Mission from "../../images/mission.jpg";

const About_home = () => {
  return (
    <>
      <section class="about-home  body-font">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-14">
            <h1 class="home-about-me sm:text-3xl text-2xl ">
              <span className="title-underline">About</span> Us
            </h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 text-gray-800">
              <div className="lg:ps-10 md:ps-16 md:pe-10">
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat]">
                    Our Vision
                  </div>
                  <div className="">
                    <ul>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;Undertake initiatives for drinking water supply and waster water management,  in both urban and rural areas in India or overseas to Submit relevant projects proposal  to the government for consideration.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;Lead public campaigns for water conservation, encouraging responsible water and waste water usage.</li>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;Circulate And Share Prompt Information - Waptab organisation wishes to share easy access to exchange views and ideas for healthy business practice.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;Single Roof Solutions - Our aim is to provide single roof solutions for all members.</li>
                    </ul>
                  </div>
              </div>
              <div className="ImgContent mx-auto">
                <img src={Vision} className="rounded-md"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 py-10 text-gray-800">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Second} className="rounded-md" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1 lg:order-2">
                <div>
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat]">Our Mission</div>
                </div>
                <div>
                <ul>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;The mission of WAPTAB is to unite the vibrant world of water. It aims to provide a platform for for the the water industry  to converge and work together in achieving solutions to issuesrelated to the water sector.</li>
                  <li className="py-2  font-[Montserrat]">&#9658; &nbsp;WAPTAB is a joint effort of the business community from Bharat</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;Manufacturers, traders, importers and service providers engaged in activity related to water purification domestic as well as industrial water filtration plants, wastewater treatment plants, domestic & industrial RO plants, water purification plants spares and chemicals all activities for safe and clean water useful to drink, farm and manufacturing process.</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class=" flex items-center justify-center w-full mx-auto px-5 sm:px-0  sm:space-x-4 sm:space-y-0 space-y-4">
            <NavLink to={'/about'}>
              <button  class="border-0 py-2 px-5 focus:outline-none  rounded ">
                Read More
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_home;
