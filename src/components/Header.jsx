import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header({ spotify }) {
  const user = useSelector((state) => state.spotify.user);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs"
          name="search"
          id=""
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0].url} alt="Suriya" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
