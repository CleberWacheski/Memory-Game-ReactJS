import style from './style.module.css'
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom';

interface player {
    name : string;
    email : string;
    LevelOne:string;
    LevelTwo:string;
    _id: string
}

export function Records() {
    const [players, setPlayers] = useState<player[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function GetPlayers() {
            const { data } = await api.get('/users')

            setPlayers(data)
        }
        GetPlayers()
    }, [])

    return (
        <div className={style.container}>
            <p>RECORDS</p>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Level01</th>
                        <th>Level02</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        players.map((player) =>
                            <tr  key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.LevelOne}</td>
                                <td>{player.LevelTwo}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button 
                onClick={()=>navigate('/Home')}
                className={style.button}

            >
                VOLTAR
            </button>
        </div>
    )
}