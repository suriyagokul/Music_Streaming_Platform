import React, { useState } from "react";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../styles/songRow.css";

function SongRow({ item }) {
  const [hovered, setHovered] = useState(false);

  let singers = [];

  const handleSound = () => {
    // const accessToken = spotify.getAccessToken(); Get the access token from the Spotify object
  };
  return (
    <div
      className="songrow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="track--icon" onClick={handleSound}>
        {hovered ? <PlayArrowIcon /> : <AudiotrackOutlinedIcon />}
      </button>
      <img src={item?.album.images[0].url} alt="" />
      <div>
        <h2 className="song--name">{item.name.split("(")[0]}</h2>
        {item?.artists.map((artist) => {
          singers.push(artist.name);
        })}
        <p className="singer">{singers.join("-")}</p>
      </div>
    </div>
  );
}

export default SongRow;
