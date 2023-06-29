import React from "react";
import { useSelector } from "react-redux";

export default function Player() {
  const currentUser = useSelector((state) => state.spotify.user);
  const currentToken = useSelector((state) => state.spotify.token);

  return (
    <div>
      <h1>
        Welcome Back {currentUser?.display_name} {currentToken}!! What's Up..
      </h1>
    </div>
  );
}
