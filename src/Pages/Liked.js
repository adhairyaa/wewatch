import { Link } from "react-router-dom";
import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";

export default function Liked() {
  const { state } = useDataProvider();
  
  // const { likedVideosId} = JSON.parse(window.localStorage.getItem("likedVideos"))
  // const {likedVideos} = likedVideosId.map((id)=>state.Data.filter((Video)=>Video.Id===id))
  return (
    <div>
        <h1>Liked</h1>
        <div className={styles.Page_Wrapper}>
         You have {state.Liked.length} Video's in Liked.
         <div className={styles.Page_Wrapper_Length}> {state.Liked.length}</div>
        </div>
        <div className={styles.Video_Listing}>
          {state.Liked.map((Video) => (
            
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
            
          ))}
        </div>
        </div>
    
  );
}
 