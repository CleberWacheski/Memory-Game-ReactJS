import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user'
import style from './style.module.css'

export const Home = () => {

    const navigation = useNavigate()
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (!user.name) {
            navigation('/')
        }
    }, [])


    return (
        <div className={style.homeContainer}>
            <h1 className={style.title}>MEMORY GAME</h1>
            <div className={style.BoxButtons}>
                <button className={style.button} onClick={() => navigation('/LevelOne')}>LEVEL ONE</button>
                <button className={style.button} onClick={() => navigation('/LevelTwo')}>LEVEL TWO</button>
                <button className={style.ButtonRecords}>RECORDS</button>
                <p>@{user.name}</p>
            </div>
        </div>
    )
}