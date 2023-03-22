import { Link } from "react-router-dom";

import { useDataProvider } from "../Context/Reducer";
import { useTheme } from "../Context/ThemeProvider";
import styles from "./Pages.module.css";
export default function Home() {
  const { state, dispatch } = useDataProvider();
  const { Data } = state;
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className={styles.Home}>
        <h1 className={styles.pageTitle}>Explore</h1>

        <div className={styles.Video_Listing}>
          {Data.map((Video) => (
            <div
              onClick={() =>
                dispatch({ type: "ADD_TO_HISTORY", payload: Video })
              }
            >
              <Link to={`/Video/${Video.Id}`}>
                <div className={styles.Video_Card}>
                  <img
                    className={styles.Video_Img}
                    src={Video.Thumbnail}
                    alt={Video.Id}
                    loading="lazy"
                  ></img>
                  <div className={styles.Video_Info}>
                    <div className={styles.Video_Info_Text}>
                      {Video.VideoTitle}
                    </div>
                    <div
                      className={styles.Video_Info_Text}
                      style={{ fontSize: ".8em" }}
                    >
                      {Video.VideoViews} Views
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
