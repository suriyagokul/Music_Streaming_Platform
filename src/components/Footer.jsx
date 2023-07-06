import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import LoopIcon from "@mui/icons-material/Loop";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import DevicesSharpIcon from "@mui/icons-material/DevicesSharp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Slider, Grid } from "@mui/material";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={require("../buttabomma.jpg")}
          className="footer__left-image"
          alt="kmk"
        />

        <div className="song--info">
          <p>buttabomma</p>
          <small>Armaan Malik</small>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__center-shuffle" />
        <SkipPreviousIcon className="footer__center-previous" />
        <PlayCircleIcon className="footer__center-play" />
        <SkipNextIcon className="footer__center-next" />
        <LoopIcon className="footer__center-loop" />
      </div>
      <div className="footer__right">
        <div className="footer__rightContainer">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className="footer__playlistIcon" />
            </Grid>
            <Grid item>
              <DevicesSharpIcon className="footer__deviceIcon" />
            </Grid>
            <Grid item>
              <VolumeDownIcon className="footer__volumeIcon" />
            </Grid>
            <Grid item xs>
              <Slider className="footer__volumeSlider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
