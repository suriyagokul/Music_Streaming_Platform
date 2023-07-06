import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/Player.css";

export default function Player({ spotify }) {
  const currentUser = useSelector((state) => state.spotify.user);
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}
