import { memo } from 'react'
import { useTimer } from '../../utils/useTimer'
import style from './style.module.css'

const timer = () => {

    const { timer } = useTimer()

    return (
        <div>
            <p className={style.timer}>{timer}</p>
        </div>
    )


}

export const Timer = memo(timer)