import React from "react";
import { useSelector } from "react-redux";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "./Header";
import SongRow from "./SongRow";
import "../styles/Body.css";

const Body = ({ spotify }) => {
  const discover_weekly = useSelector((state) => state.spotify.discover_weekly);

  console.log(discover_weekly);
  return (
    <div className="content">
      <Header spotify={spotify} />

      <div className="player__body">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h4>Discover Weekly</h4>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle icon__green" />
          <FavoriteIcon fontSize="large" className="favourite--icon" />
          <MoreHorizIcon />
        </div>

        <div className="songs">
          {discover_weekly?.tracks?.items.map((item) => (
            <SongRow key={item} item={item.track} spotify={spotify} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
