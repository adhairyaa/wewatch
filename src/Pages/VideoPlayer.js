import { useParams } from "react-router-dom";
import PlayVideo from "../Components/PlayVideo";
import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";

export default function VideoPlayer() {
  const { Video } = useParams();
  const num = parseInt(Video);
  const { state } = useDataProvider();
  const { Data } = state;
  const currentVideo = Data.filter((Item) => Item.Id === num);
console.log(Data[1].Id)
console.log(Video)
console.log(typeof(Video))
  return (
    <div className={styles.VideoPlayer}>
      <PlayVideo Video={currentVideo[0]} />
    </div>
  );
}
