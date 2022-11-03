import React from "react";
import "./LayOut.css";
import ShowCase from "../ShowCase/ShowCase";
import WelcomeBack from "../WelcomeBack/WelcomeBack";
import Weekend from "../CheersToTheWeekend/Weekend";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const LayOut = () => {
  return (
    <div className="layout__container">
        <SideBar className="sidebar sidebar__container" />
        <NavBar className="navbar navbar__container" />
        <ShowCase className="showcase showcase__img" />
        <WelcomeBack className="welcome welcome__container" />
        <Weekend className="weekend welcome__container" />
    </div>
  );
};

export default LayOut;
