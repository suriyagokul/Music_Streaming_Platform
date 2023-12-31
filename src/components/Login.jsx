import React from "react";
import "../styles/Login.css";
import { loginUrl } from "../utils/spotify";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}
