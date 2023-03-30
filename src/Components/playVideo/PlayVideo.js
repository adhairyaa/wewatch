import { useDataProvider } from "../../Context/Reducer";
import styles from "./PlayVideo.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function PlayVideo({ Video }) {
  const { dispatch } = useDataProvider();
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchListed, setIsWatchListed] = useState(false);

  const likedHandler = () => {
    if (!isLiked) {
      dispatch({ type: "ADD_TO_LIKED", payload: Video });
      setIsLiked(true);
      const locallySavedVideos = window.localStorage.getItem("likedVideos");
      const videosToSave = locallySavedVideos
        ? [...JSON.parse(locallySavedVideos), Video.Id]
        : [Video.Id];
      window.localStorage.setItem("likedVideos", JSON.stringify(videosToSave));
    } else {
      dispatch({ type: "REMOVE_FROM_LIKED", payload: Video });
      setIsLiked(false);
      const locallySavedVideos = window.localStorage.getItem("likedVideos");
      const videosToSave = JSON.parse(locallySavedVideos).filter(
        (item) => item !== Video.Id
      );
      window.localStorage.setItem("likedVideos", JSON.stringify(videosToSave));
    }
  };
  const watchlistHandler = () => {
    if (!isWatchListed) {
      dispatch({ type: "ADD_TO_WATCHLIST", payload: Video });
      setIsWatchListed(true);
    } else {
      dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: Video });
      setIsWatchListed(false);
    }
  };

  return (
    <div>
      <div className={styles.PlayVideo_Container}>
        <div className={styles.PlayVideo_Video}>
          <ReactPlayer
            url={Video.VideoSource}
            position={"relative"}
            overflow={"hidden"}
            width={"100%"}
            height={"70vh"}
            padding-top={"56.25%"}
            controls={"true"}
          />
        </div>
        <div className={styles.PlayVideo_Data}>
          <div className={styles.PlayVideo_Info}>
            <div>{Video.VideoTitle}</div>

            <div>{Video.VideoViews} Views</div>
          </div>
          <div className={styles.PlayVideo_Buttons}>
            <button
              onClick={() => watchlistHandler()}
              style={{ color: isWatchListed ? "red" : "black" }}
            >
              <i class="fa-solid fa-clock"></i>
            </button>

            <button
              style={{ color: isLiked ? "red" : "black" }}
              onClick={() => likedHandler()}
            >
              <i class="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_PLAYLIST", payload: Video })
              }
            >
              <i class="fa-solid fa-list-check"></i>
            </button>
          </div>
        </div>
      </div>

      <h1>related</h1>
    </div>
  );
}
