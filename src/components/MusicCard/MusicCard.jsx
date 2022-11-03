import React from "react";
import "./MusicCard.css";
import BurnaBoy from "../../assets/burna boy.svg";

const MusicCard = ({ptext,htext, img}) => {
  return (
    <div className="music__card__container">
      <div className="music__card__text">
        <h4>{htext}</h4>
        <p>{ptext} </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default MusicCard;
