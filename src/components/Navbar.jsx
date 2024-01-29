import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen)

 

  return (
    <div className="navbar">
      <h2>LOGO</h2>

      <div>
        <HiMiniBars3CenterLeft
          className="ri-menu-3-fill"
          onClick={handleToggle}
        />

       
       
          <nav  className={`${!isOpen ? "open" : "close"}`}>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about-us"}>About us</NavLink>
              </li>
              <li>
                <NavLink to={"/Features"}>Features</NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        

        

        

        </div>
    </div>
  );
};
