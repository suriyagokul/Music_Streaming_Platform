import React from "react";
import "../styles/SidebarOptions.css";

export default function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebar__icons" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
