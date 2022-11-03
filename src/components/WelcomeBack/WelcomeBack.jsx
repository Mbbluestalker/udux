import React from "react";
import MusicCard from "../MusicCard/MusicCard";
import "./WelcomeBack.css";
import BurnaBoy from "../../assets/burna boy.svg";
import AdekunleGold from "../../assets/adekunle gold.svg";
import Koffee from "../../assets/koffee.svg";

const WelcomeBack = ({ ptext, htext, img, className }) => {
  return (
    <div className={className} id="welcome__back__container">
      <h3>Welcome Back!</h3>
      <div className="welcome__img__group">
        <MusicCard
          ptext="Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... "
          htext="Daily Vibes 1"
          img={BurnaBoy}
        />
        <MusicCard
          ptext="Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... "
          htext="Daily Vibes 2"
          img={AdekunleGold}
        />
        <MusicCard
          ptext="Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy"
          htext="Daily Vibes 3"
          img={Koffee}
        />
        <MusicCard
          ptext="Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... "
          htext="Daily Vibes 1"
          img={BurnaBoy}
        />
        <MusicCard
          ptext="Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... "
          htext="Daily Vibes 2"
          img={AdekunleGold}
        />
        <MusicCard
          ptext="Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy"
          htext="Daily Vibes 3"
          img={Koffee}
        />
      </div>
    </div>
  );
};

export default WelcomeBack;
