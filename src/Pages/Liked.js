import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";

export default function Liked() {
  const { state } = useDataProvider();
  const { Liked } = state;
  return (
    <div>
        <h1>Liked</h1>
        <div className={styles.Page_Wrapper}>
         You have {Liked.length} Video's in Liked.
         <div className={styles.Page_Wrapper_Length}> {Liked.length}</div>
        </div>
        <div>
        {Liked.map((Video)=><ul>{Video.VideoLink}</ul>)}
        </div>
        
        </div>
    
  );
}
