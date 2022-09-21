import { memo, useEffect, useState } from 'react'
import style from './style.module.css'

interface TimerPros {
    minutes : string;
    seconds : string;
}

const timer = ({minutes,seconds} : TimerPros) => {

    return (
        <div>
            <p className={style.timer}>{`${minutes}:${seconds}`}</p>
        </div>
    )


}

export const Timer = memo(timer)