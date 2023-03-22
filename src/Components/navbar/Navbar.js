import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeProvider";
export default function Navbar() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className={styles.Navbar}>
        <NavLink
          to="/explore"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          <div className={styles.Navbar_icons}>
            {" "}
            <i class="fa-solid fa-compass"></i>{" "}
          </div>
        </NavLink>
        <div className={styles.iconName}>explore</div>
        <NavLink
          to="/watchlist"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          <div className={styles.Navbar_icons}>
            {" "}
            <i class="fa-solid fa-clock"></i>{" "}
          </div>
        </NavLink>
        <div className={styles.iconName}>watchlist</div>
        <NavLink
          to="/history"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          <div className={styles.Navbar_icons}>
            {" "}
            <i class="fa-solid fa-clock-rotate-left"></i>
          </div>
        </NavLink>
        <div className={styles.iconName}>history</div>
        <NavLink
          to="/liked"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          <div className={styles.Navbar_icons}>
            {" "}
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
        </NavLink>
        <div className={styles.iconName}>liked</div>
        <NavLink
          to="/playlist"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          <div className={styles.Navbar_icons}>
            {" "}
            <i class="fa-solid fa-list-check"></i>
          </div>
        </NavLink>
        <div className={styles.iconName}>playlist</div>
      </div>
    </div>
  );
}
