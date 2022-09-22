import { memo } from 'react';
import style from './style.module.css'

interface cardProps {

    name: string;
    id: string;
    active: boolean | 'Match';
    match: boolean;
    handleActiveCard: (id: string) => void;
}


export const Card = ({ active, id, name, match, handleActiveCard }: cardProps) => {

    return (
        <div
            className={`${style.cardWrapper} ${(active || match) ? style.active : ''}`}
            onClick={() => handleActiveCard(id)}
        >

            <div className={style.card_FRONT}>

            </div>
            <div className={style.card_BACK}
            >
                <img
                    className={style.cardImages}
                    src={`./${name}.png`}
                />
            </div>

        </div>
    )
}
