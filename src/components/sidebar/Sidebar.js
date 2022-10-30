import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">{/* <MonitorHeartIcon className="logo" /> */}</div>
      <div className="center">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">
              <div className="icon_container">
                <DashboardIcon className="icon" />
                <p>Dashboard</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mydates" activeClassName="active">
              <div className="icon_container">
                <CalendarMonthIcon className="icon" />
                <p>Schedules</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" activeClassName="active">
              <div className="icon_container">
                <MessageIcon className="icon" />
                <p>Messages</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <div className="icon_container">
                <SettingsIcon className="icon" />
                <p>Settings</p>
              </div>
            </NavLink>
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
              <div className="icon_container">
                <LogoutIcon className="icon" />
                <p>Logout</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
