
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";
import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";
export default function Home() {
  const { state, dispatch } = useDataProvider();
  const { Data } = state;
console.log(Data)
  return (
    <div className="Home">
       <Filter />
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
  );
}
