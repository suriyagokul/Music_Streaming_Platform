import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SidebarOption from "./SidebarOption";
import "../styles/Sidebar.css";

const Sidebar = () => {
  let userPlaylist = useSelector((state) => state.spotify.playlists);

  // console.log(userPlaylist); returns list of playlists in items array

  return (
    <div className="sidebar">
      <img
        className="sidebar__image"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br />

      <strong className="playlists__title">PLAYLISTS</strong>

      <hr />

      {userPlaylist?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
