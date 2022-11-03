import React from "react";
import "./SideBar.css";
import SideBarHeaderImg from '../../assets/sidebar_image.svg'

const SideBar = ({ className }) => {
  return (
    <div className={className} id="sidebar">
      <div className="sidebar__header">
        <img src={SideBarHeaderImg} alt="" />
        <p>Hey! Aleem</p>
      </div>
    </div>
  );
};

export default SideBar;
