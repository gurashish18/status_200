import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <MonitorHeartIcon className="logo" />
      </div>
      <div className="center">
        <ul>
          <li>
            <Link to="/">
              <DashboardIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/mydates">
              <CalendarMonthIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <MessageIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <SettingsIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <img
              src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
              className="profile_image"
              alt="profile"
            />
          </li>
          <li>
            <Link to="login">
              <LogoutIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
