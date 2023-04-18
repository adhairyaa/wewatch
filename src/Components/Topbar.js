import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeProvider";
import styles from "./Topbar.module.css";
export default function Topbar() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <div
        className={styles.Topbar}
        style={{ backgroundColor: theme === "light" ? "white" : "black" }}
      >
        <div className={styles.Topbar_logo}>
          <lord-icon
            src="https://cdn.lordicon.com/ensnyqet.json"
            trigger="morph"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
          <div style={{ fontSize: "1.5em" }}>
            We<span style={{ color: "red" }}>Watch</span>
          </div>
        </div>

        <input className={styles.searchbar} placeholder="search..."></input>
        <div className={styles.Topbar_element}>
          <button onClick={() => toggleTheme()}>
            {" "}
            <div style={{ color: theme === "light" ? "black" : "white" }}>
              <i class="fa-sharp fa-solid fa-sun"></i>
            </div>
          </button>
          <Link to="/login">
            <i class="fa-solid fa-user" style={{ color: "red" }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
