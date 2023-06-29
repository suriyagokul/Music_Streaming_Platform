import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player.jsx";
import { getTokenFromUrl } from "./utils/spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl(); // gives obj having access_token, expires in..etc
    window.location.hash = ""; // hide the access token in url

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      console.log(spotify);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => console.log(user));
    }
  }, []);

  return (
    // BEM convention
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
