import { useState } from "react"

interface useTimerProps {
    timer : string;
    timeout : number;
}

export const useTimer = () => {

    const [timer, setTimer] = useState(0)

    const interval = setTimeout(() => {
        setTimer(state => state + 1)
    }, 1000)

    let minutes = String(Math.floor(timer / 60)).padStart(2, '0')

    let seconds = String(timer % 60).padStart(2, '0')



    return {
        timer: `${minutes}:${seconds}`,
    }


}