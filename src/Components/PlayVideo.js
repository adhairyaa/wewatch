import { useDataProvider } from "../Context/Reducer";
import styles from "./PlayVideo.module.css";
import ReactPlayer from "react-player";

export default function PlayVideo({ Video }) {
  const { dispatch } = useDataProvider();

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
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_WATCHLIST", payload: Video })
            }
          >
            <i class="fa-solid fa-clock"></i>
          </button>

          <button
            onClick={() => dispatch({ type: "ADD_TO_LIKED", payload: Video })}
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
