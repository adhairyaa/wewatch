import React from "react";
import styles from "./Navbar.module.css"
import {  NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeProvider";
export default function Navbar() {
  const {theme} = useTheme()
  return (
    <div className={theme}>
    <div className={styles.Navbar}>
      <NavLink
        to=""
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        <div className={styles.Navbar_icons}>
          {" "}
          <i class="fa-solid fa-compass"></i>{" "}
        </div>
      </NavLink>
      explore
      <NavLink
        to="/watchlist"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        <div className={styles.Navbar_icons}>
          {" "}
          <i class="fa-solid fa-clock"></i>{" "}
        </div>
      </NavLink>
      watchlist
      <NavLink
        to="/history"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        <div className={styles.Navbar_icons}>
          {" "}
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
      </NavLink>
      history
      <NavLink
        to="/liked"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        <div className={styles.Navbar_icons}>
          {" "}
          <i class="fa-solid fa-thumbs-up"></i>
        </div>
      </NavLink>
      liked
      <NavLink
        to="/playlist"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        <div className={styles.Navbar_icons}>
          {" "}
          <i class="fa-solid fa-list-check"></i>
        </div>
      </NavLink>
      playlist
    </div>
    </div>
  );
}
