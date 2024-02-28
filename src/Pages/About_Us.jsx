import React from "react";
import "../Elements/About.css";
// import First from "../images/about-1.jpg";
import Second from "../images/about-2.jpg";
import Third from "../images/objective.jpg";
import Vision from "../images/vision-1.jpg";
import Mission from "../images/mission-1.jpg";
import Goal from "../images/goal-1.jpg";

const About_Us = () => {
  return (
    <>
      <section class="about text-slate-800 bg-white body-font">
        <div class=" mx-auto">
          <div class="text-center px-5 py-16 mb-20  font-[Montserrat] bg-slate-100">
            <h1 class="about-title sm:text-3xl text-2xl    mb-7">
              <span className="title-underline">About</span> Us
            </h1>
            <p class="text-base leading-relaxed  xl:w-3/4 lg:w-3/4  mx-auto text-gray-800 text-opacity-80">
              <b>WAPTAB</b> stands out as one of India's premier platforms in the water industry, engaging with latest technologies for water and wastewater management services.
            </p>

            <br />
            <p class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-800 text-opacity-80">
              <b>WAPTAB</b> brings together professionals and experts from various sectors of the water industry, including manufacturers, traders, importers, and service providers. It focuses on activities such as water purification and treatment, residential, commercial, and industrial water filtration plants, wastewater treatment plants, domestic and industrial RO plants, and more. By uniting the entire industry, WAPTAB offers a special chance to share business opportunities, network, and discover innovative water solutions all in one place.
            </p>

            <p class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-800 text-opacity-80 pt-3">
              <b>AT WAPTAB</b>, we're more than just an organization; we're a community united by our shared commitment to water sustainability and environmental stewardship. Through our outreach initiatives and educational programs, we strive to raise awareness about the importance of water conservation and responsible usage practices.
            </p>

            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-950 inline-flex"></div>
            </div>
          </div>

          <div>
          <div className=" ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 px-5">
              <div className="lg:ps-10 md:ps-16 md:pe-10  px-2 pb-3">
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">
                    Our Vision
                  </div>
                  <div className="">
                    <ul className="">
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Strong Business Community:</b> We aim to build a strong community of businesses in the growing water industry.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Easy Access:</b> We strive to make it easy for business owners to connect and communicate effectively.</li>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Quick Information Sharing::</b> WAPTAG is dedicated to sharing ideas promptly to encourage healthy business practices.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;<b>All-in-One Solutions:</b> Our goal is to provide everything our members need under one roof for their business success.</li>
                    </ul>
                  </div>
              </div>
              <div className="ImgContent mx-auto">
                <img src={Vision} className="rounded-md w-[670px]"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 py-10 px-5">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Mission} className="rounded-md  w-[670px]" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1  px-2 pb-3 lg:order-2">
                <div>
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">Our Mission</div>
                </div>
                <div>
                <ul>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;The mission of <b className="font-semibold">WAPTAB</b> is to bring together the dynamic water community from all across India. It strives to create a platform for the water industry to come together and collaborate in finding solutions to challenges within the water sector.</li>
                  {/* <li className="text-lg text-[rgb(3,74,102);] font-medium pt-3 underline underline-offset-4  font-[Montserrat]">A JOINT HAND VICTORY</li> */}
                  <li className="py-2  font-[Montserrat]">&#9658; &nbsp;WAPTAB is a joint effort of the business community from Bharat</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;Manufacturers, traders, importers and service providers engaged in activity related to water purification domestic as well as industrial water filtration plants, wastewater treatment plants, domestic & industrial RO plants, water purification plants spares and chemicals all activities for safe and clean water useful to drink, farm and manufacturing process.</li>
                </ul>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 pb-10 px-5">
              <div className="lg:ps-10 md:ps-16 md:pe-10  px-2 pb-3">
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">
                    Our Objective
                  </div>
                  <div className="">
                    <ul>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Industry Advancement:</b> WAPTAB aims to propel the water purification and treatment industry forward by promoting the adoption of cutting-edge technologies and best practices.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Networking and Collaboration:</b> We provide a dynamic platform for professionals, manufacturers, traders, importers, service providers, and experts to connect, collaborate, and share insights, fostering a vibrant ecosystem of knowledge exchange.</li>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;<b>Advocacy and Awareness:</b> WAPTAB advocates for policies and initiatives that prioritize water conservation, quality, and accessibility. We strive to raise awareness about the importance of efficient water management practices and the need for sustainable solutions.</li>
                      {/* <li className=" font-[Montserrat]">&#9658; &nbsp;Single Roof Solutions - Our aim is to provide single roof solutions for all members.</li> */}
                    </ul>
                  </div>
              </div>
              <div className="ImgContent mx-auto">
                <img src={Third} className="rounded-md  w-[670px]"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 lg:py-10 lg:pb-20 md:pb-16 px-5 pb-10">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Goal} className="rounded-md  w-[670px]" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1 lg:order-2  px-2 pb-3">
                <div>
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">Our Goal</div>
                </div>
                <div>
                <ul>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Business Opportunities:</b> WAPTAB serves as a catalyst for business growth and development, facilitating partnerships, market expansion, and investment opportunities within the water purification and treatment sector.</li>
                  {/* <li className="text-lg text-[rgb(3,74,102);] font-medium pt-3 underline underline-offset-4  font-[Montserrat]">A JOINT HAND VICTORY</li> */}
                  <li className="py-1 pt-2  font-[Montserrat]">&#9658; &nbsp;<b>Life on Land:</b> Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Capacity Building:</b> Through seminars, workshops, and educational initiatives, WAPTAB endeavors to enhance the skills and knowledge base of industry stakeholders, empowering them to address emerging challenges and opportunities effectively.</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;<b>Clean Water And Sanitation:</b> Ensure availability and sustainable management of water and sanitation for all.</li>
                </ul>
                </div>
              </div>
            </div>


          </div>
          </div>
            
          
        </div>
      </section>
    </>
  );
};

export default About_Us;
