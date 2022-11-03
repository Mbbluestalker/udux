import React from "react";
import "./SideBar.css";
import SideBarHeaderImg from '../../assets/sidebar_image.svg'
import HomeIcon from "../../assets/home_icon.svg";
import DiscoverIcon from "../../assets/discover_icon.svg";
import YourLibraryIcon from '../../assets/your_library_icon.svg';
import LikedSongIcon from '../../assets/liked_song_icon.svg';
import SpeakerIcon from '../../assets/speaker_icon.svg';
import RecentlyPlayedIcon from '../../assets/recently_played_icon.svg';
import CreatePlaylistIcon from '../../assets/create_playlist_icon.svg';
import MyPlaylistIcon from '../../assets/my_playlists_icon.svg';
import SearchIcon from '../../assets/search_icon.svg';

const playlist = [
  { id: 1, name: "Riffs & Runs" },
  { id: 2, name: "African Heat" },
  { id: 3, name: "Gidi Nights" },
  { id: 4, name: "Saturday was a Good Day" },
  { id: 5, name: "Gidi Nights" },
  { id: 6, name: "Gidi Nights" },
  { id: 7, name: "Riffs & Runs" },
  { id: 8, name: "Riffs & Runs" },
  { id: 9, name: "Gidi Nights" },
  { id: 10, name: "Running out of Playlist na...." },
  { id: 11, name: "Riffs & Runs" },
  { id: 12, name: "Gidi Nights" },
  { id: 13, name: "Riffs & Runs" },
  { id: 14, name: "Riffs & Runs" },
  { id: 15, name: "Gidi Nights" },
]

const SideBar = ({ className }) => {
  return (
    <div className={className} id="sidebar">
      <div className="sidebar__header">
        <img src={SideBarHeaderImg} alt="" />
        <p>Hey! Aleem</p>
      </div>


      <div className="home__discover">
        <div className="home">
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </div>

        <div className="discover">
          <img src={DiscoverIcon} alt="" />
          <p>Discover</p>
        </div>
      </div>


      <div className="playlist__section">
        <div className="your__library">
          <img src={YourLibraryIcon} alt="" />
          <p>Your Library</p>
        </div>
        <div className="liked__songs">
          <img src={LikedSongIcon} alt="" />
          <p>Liked Songs</p>
          <img src={SpeakerIcon} alt="" />
        </div>
        <div className="recently__played">
          <img src={RecentlyPlayedIcon} alt="" />
          <p>Recently Played</p>
        </div>
        <div className="create__playlist">
          <img src={CreatePlaylistIcon} alt="" />
          <p>Create Playlist</p>
        </div>
        <div className="my__playlist">
          <img src={MyPlaylistIcon} alt="" />
          <p>My Playlists </p>
          <img src={SearchIcon} alt="" />
        </div>
      </div>


      <div className="playlist">
        {console.log(playlist)}
        {playlist.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </div>
    </div>
  );
};

export default SideBar;
