import React from "react";
import "./NavBar.css";
import Prev from "../../assets/previous_icon.svg";
import Next from "../../assets/next_icon.svg";
import Search from "../../assets/search_icon.svg";

const NavBar = ({className}) => {
  return (
    <div className={className} id="navbar__container"  >
      <div className="prev_next">
        <img src={Prev} alt="" />
        <img src={Next} alt="" />
      </div>

      <div>
        <img src={Search} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
