import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDiscoverWeekly } from "../features/spotify/spotifySlice";
import "../styles/SidebarOptions.css";

export default function SidebarOption({ title, Icon, spotify }) {
  const dispatch = useDispatch();

  const handlePlaylist = () => {
    if (title == "srk") {
      spotify.getPlaylist("7q4edi4FAjM3n8x82aDGPt").then((res) => {
        dispatch(setDiscoverWeekly(res));
      });
    } else {
      spotify.getPlaylist("3moqBiqnk7fq6LUaTKYCST").then((res) => {
        dispatch(setDiscoverWeekly(res));
      });
    }
  };

  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebar__icons" />}
      {Icon ? <h4>{title}</h4> : <p onClick={handlePlaylist}>{title}</p>}
    </div>
  );
}
