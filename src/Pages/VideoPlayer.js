import { useParams } from "react-router-dom";
import PlayVideo from "../Components/playVideo/PlayVideo";
import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";

export default function VideoPlayer() {
  const { video } = useParams();
  const videoId = parseInt(video);
  const { state } = useDataProvider();
  const { Data } = state;
  const currentVideo = Data.filter((item) => item.Id === videoId);
  return (
    <div className={styles.VideoPlayer}>
      <PlayVideo Video={currentVideo[0]} />
    </div>
  );
}
