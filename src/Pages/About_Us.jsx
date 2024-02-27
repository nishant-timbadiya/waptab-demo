import React from "react";
import "../Elements/About.css";
// import First from "../images/about-1.jpg";
import Second from "../images/about-2.jpg";
import Third from "../images/about-3.jpg";
import Vision from "../images/vision.jpg";
import Mission from "../images/mission.jpg";
import Goal from "../images/goal.jpg";

const About_Us = () => {
  return (
    <>
      <section class="about text-slate-800 bg-white body-font">
        <div class=" mx-auto">
          <div class="text-center px-5 py-16 mb-20 bg-slate-100">
            <h1 class="about-title sm:text-3xl text-2xl    mb-7">
              <span className="title-underline">About</span> Us
            </h1>
            <p class="text-base leading-relaxed  xl:w-3/4 lg:w-3/4  mx-auto text-gray-800 text-opacity-80">
              <b>Welcome to WAPTAB</b> Your Trusted Hub for Water Purification and Treatment Solutions in India!
            </p>

            <br />
            <p class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-800 text-opacity-80">
              <b>WAPTAB</b> stands as a cornerstone organization within the Water Purification and Treatment Industry across India. Operating nationally, we've cultivated a diverse community of members representing every corner of our vast country. This diversity enriches our collective knowledge and experience, making WAPTAB a vibrant platform for collaboration and advancement.
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
              <div className="lg:ps-10 md:ps-16 md:pe-10">
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">
                    Our Vision
                  </div>
                  <div className="">
                    <ul className="">
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;Business Community - Our goal is to develop a strong business community for the growing industry of water.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;We believe in the power of collaboration and knowledge exchange, which is why we host seminars, workshops, and networking events to facilitate meaningful interactions among industry peers.</li>
                      <li className="py-2  font-[Montserrat]">&#9658; &nbsp;Circulate And Share Prompt Information - Waptag organisation wishes to share easy access to exchange views and ideas for healthy business practice.</li>
                      <li className=" font-[Montserrat]">&#9658; &nbsp;Join us at WAPTAB and be part of a movement dedicated to shaping a brighter, more sustainable future for India's water resources. Together, we can make a meaningful impact.</li>
                    </ul>
                  </div>
              </div>
              <div className="ImgContent mx-auto">
                <img src={Vision} className="rounded-md"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 py-10 px-5">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Second} className="rounded-md" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1 lg:order-2">
                <div>
                  <div className="text-3xl font-bold text-[rgb(3,74,102);] pb-7 underline underline-offset-8 font-[Montserrat] text-center lg:text-start">Our Mission</div>
                </div>
                <div>
                <ul>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;Our mission at WAPTAB is to nurture innovation and excellence in water purification and treatment practices. Whether you're a manufacturer, trader, importer, or service provider, WAPTAB offers you a unique forum to showcase your contributions, build valuable connections, and stay informed about the latest industry developments.</li>
                  {/* <li className="text-lg text-[rgb(3,74,102);] font-medium pt-3 underline underline-offset-4  font-[Montserrat]">A JOINT HAND VICTORY</li> */}
                  <li className="py-2  font-[Montserrat]">&#9658; &nbsp;WAPTAB is a joint effort of the business community from Bharat</li>
                  <li className=" font-[Montserrat]">&#9658; &nbsp;Manufacturers, traders, importers and service providers engaged in activity related to water purification domestic as well as industrial water filtration plants, wastewater treatment plants, domestic & industrial RO plants, water purification plants spares and chemicals all activities for safe and clean water useful to drink, farm and manufacturing process.</li>
                </ul>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 pb-10 px-5">
              <div className="lg:ps-10 md:ps-16 md:pe-10">
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
                <img src={Third} className="rounded-md"  alt="..." />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-col-1 items-center lg:px-16 lg:py-10 px-5 pb-10">
              <div className="ImgContent order-2 lg:order-1 mx-auto">
                <img src={Goal} className="rounded-md" alt="" />
              </div>
              <div className="lg:pe-6 lg:ps-7 md:ps-16 md:pe-10 order-1 lg:order-2">
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
