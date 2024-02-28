import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Elements/Header.css";
// import { logo_img } from "../images/data";
import logo from "../images/waptab-logo-1.jpg";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Main_Header() {
  const [isActive, setIsActive] = useState(1);
  
  const [isOpen, setIsOpen] = useState(true);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
  };

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="shadow-md w-full bg-white py-3">
      <div className="lg:px-16 md:px-7 px-5 lg:flex justify-between items-center">
        <div className="">
          <span>
            <img className="w-48" src={logo} alt="nishant" />
          </span>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute md:right-10 md:top-8 right-5 top-8 cursor-pointer h-fit"
        >
          {isOpen ? (
            <FaBars className="text-3xl" />
          ) : (
            <AiOutlineClose className="text-3xl" />
          )}
        </div>

        {/* nav-menu lg:flex md:flex-none lg:flex-wrap lg:flex-row items-start text-base */}
        <nav
          class={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-white lg:z-auto z-[1] left-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in ${
            isOpen ? "top-[-400px]" : "top-[85px]"
          }  `}
        >
          <div className="bg-white lg:flex gap-1">
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/"
                activeClassName="active"
                id="1"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 1
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Home
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/about"
                id="2"
                activeClassName="active"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 2
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                About
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/committee"
                activeClassName="active"
                id="3"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 3
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Committee
              </NavLink>
            </div>
            {/* <div className="lg:p-0 p-1.5">
              <NavLink
            to="/facilities"
            activeClassName="active"
            id="4"
            onClick={(e) => handleNavSelected(e)}
            class={
              isActive == 4
                ? "active mr-5  hover:text-black  cursor-pointer "
                : "mr-5  hover:text-black  cursor-pointer "
            }
          >
            Facilities
          </NavLink>
            </div> */}
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/expo"
                activeClassName="active"
                id="5"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 5
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Expo 2024
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/contact"
                id="6"
                activeClassName="active"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 6
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Contact
              </NavLink>
              </div>
              <div  className="lg:p-0 p-1.5">
              <NavLink
                to="/join_waptab"
                id="7"
                activeClassName="active"
                onClick={(e) => handleNavSelected(e)}
                class={
                  isActive == 7
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Join Waptab
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Main_Header;
