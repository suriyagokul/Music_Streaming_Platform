import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  setUserToken,
  setPlaylist,
  setDiscoverWeekly,
} from "./features/spotify/spotifySlice";
import config from "./config/spotify.config";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player.jsx";
import { getTokenFromUrl } from "./utils/spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  let spotifyUser = useSelector((state) => state.spotify.user);
  const dispatch = useDispatch();

  const discover_weekly = useSelector((state) => state.spotify.discover_weekly);

  let myplaylist = discover_weekly?.external_urls?.spotify
    ?.split("/")
    .slice(-1)[0];

  console.log(myplaylist);

  useEffect(() => {
    const hash = getTokenFromUrl(); // gives obj having access_token, expires in..etc
    window.location.hash = ""; // hide the access token in url

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      localStorage.setItem("spotifyToken", _token);

      dispatch(setUserToken(_token));

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(setUser(user));
      });

      console.log(spotifyUser);

      spotify.getUserPlaylists(spotifyUser?.id).then((playlists) => {
        dispatch(setPlaylist(playlists));
      });

      spotify.getPlaylist("3moqBiqnk7fq6LUaTKYCST").then((res) => {
        dispatch(setDiscoverWeekly(res));
      });
    }
  }, [dispatch, spotifyUser?.id]);

  return (
    // BEM convention
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
