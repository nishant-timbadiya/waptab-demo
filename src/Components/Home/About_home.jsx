import React from "react";
import '../../Elements/About_home.css'
import First from "../../images/about-1.jpg";
import Second from "../../images/about-2.jpg";
import { NavLink } from "react-router-dom";
import Vision from "../../images/vision-1.jpg";
import Mission from "../../images/mission-1.jpg";

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
              <div className="lg:ps-10 md:ps-16 md:pe-10 px-2 pb-3">
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat]">
                    Our Vision
                  </div>
                  <div className="">
                    <ul>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Strong Business Community:</b> We aim to build a strong community of businesses in the growing water industry.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Easy Access:</b> We strive to make it easy for business owners to connect and communicate effectively.</li>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Quick Information Sharing::</b> WAPTAG is dedicated to sharing ideas promptly to encourage healthy business practices.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;<b>All-in-One Solutions:</b> Our goal is to provide everything our members need under one roof for their business success.</li>
                    </ul>
                  </div>
              </div>
              <div className="ImgContent mx-auto">
                <img src={Vision} className="rounded-md"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 py-10 text-gray-800">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Mission} className="rounded-md" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1 px-2 pb-3 lg:order-2">
                <div>
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat]">Our Mission</div>
                </div>
                <div>
                <ul>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;The mission of WAPTAB is to unite the vibrant world of water. It aims to provide a platform for for the the water industry  to converge and work together in achieving solutions to issuesrelated to the water sector.</li>
                  <li className="py-2  font-[Montserrat]">&#9658; &nbsp;WAPTAB is a joint effort of the business community from Bharat</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;The mission of <span className="font-semibold">WAPTAB</span> is to bring together the dynamic water community from all across India. It strives to create a platform for the water industry to come together and collaborate in finding solutions to challenges within the water sector.</li>
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
