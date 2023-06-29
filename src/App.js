import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player.jsx";
import { getTokenFromUrl } from "./utils/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // hide the access token in url

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    // BEM convention
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
