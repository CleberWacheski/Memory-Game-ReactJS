import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

export const Home = () => {

    const navigation = useNavigate()

    return (
        <div className={style.homeContainer}>
            <h1 className={style.title}>MEMORY GAME</h1>
            <div className={style.BoxButtons}>
                <button className={style.button} onClick={()=>navigation('/LevelOne')}>LEVEL ONE</button>
                <button className={style.button} onClick={()=>navigation('/LevelTwo')}>LEVEL TWO</button>
                <button className={style.button}>LEVEL THREE</button>
                <button className={style.ButtonRecords}>RECORDS</button>
            </div>
        </div>
)
}