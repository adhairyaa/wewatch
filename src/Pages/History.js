import { Link } from 'react-router-dom'
import { useDataProvider } from '../Context/Reducer'
import styles from './Pages.module.css'

export default function History() {
const {state} = useDataProvider()

    return(
        <div>
        <h1>History</h1>
        <div className={styles.Page_Wrapper}>
         You have {state.History.length} Video's in History.
         <div className={styles.Page_Wrapper_Length}> {state.History.length}</div>
        </div>
        <div className={styles.Video_Listing}>
          {state.History.map((Video) => (
            
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
      
        
        
    )
}