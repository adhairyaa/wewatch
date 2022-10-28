import { useTheme } from "../Context/ThemeProvider";
import styles from "./Topbar.module.css";
export default function Topbar() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={theme}>
      <div className={styles.Topbar}>
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
            <i class="fa-sharp fa-solid fa-sun"></i>
          </button>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
}
