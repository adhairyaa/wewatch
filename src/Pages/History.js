import { useDataProvider } from '../Context/Reducer'
import styles from './Pages.module.css'

export default function History() {
const {state} = useDataProvider()
const {historyData} = JSON.parse(window.localStorage.getItem('History'))
    return(
        <div>
        <h1>History</h1>
        <div className={styles.Page_Wrapper}>
         You have {state.History.length} Video's in History.
         <div className={styles.Page_Wrapper_Length}> {state.History.length}</div>
        </div>
        <div>
        {state.History.map((Video)=><ul>{Video.VideoLink}</ul>)}
        </div>
        </div>
    )
}