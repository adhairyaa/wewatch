import { useDataProvider } from "../../Context/Reducer";
import styles from "./PlayVideo.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function PlayVideo({ Video }) {
  const { state, dispatch } = useDataProvider();
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchListed, setIsWatchListed] = useState(false);

  const likedHandler = () => {
    // const locallySavedVideos = window.localStorage.getItem("likedVideos");
    // const videosToSave = locallySavedVideos ? [ ...JSON.parse(locallySavedVideos), Video ] : [Video]
    // window.localStorage.setItem ('likedVideos', JSON.stringify(videosToSave));
    if (!isLiked) {
      dispatch({ type: "ADD_TO_LIKED", payload: Video.Id });
      setIsLiked(true);
    } else {
      dispatch({ type: "REMOVE_FROM_LIKED", payload: Video.Id });
      setIsLiked(false);
    }

    const watchlistHandler = () => {
      if (!isWatchListed) {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: Video.Id });
        state.Watchlist.includes(Video.Id) && setIsWatchListed(true);
      } else {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: Video.Id });
        setIsWatchListed(false);
      }
    };
  };

  return (
    <div>
      <div className={styles.PlayVideo_Container}>
        <div className={styles.PlayVideo_Video}>
          <ReactPlayer
            url={Video.VideoSource}
            width={"90%"}
            height={"80vh"}
            controls={"true"}
          />
        </div>
        <div className={styles.PlayVideo_Data}>
          <div className={styles.PlayVideo_Info}>
            <div>{Video.VideoTitle}</div>

            <div>{Video.VideoViews} Views</div>
          </div>
          <div className={styles.PlayVideo_Buttons}>
            <button onClick={() => watchlistHandler()}>
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
