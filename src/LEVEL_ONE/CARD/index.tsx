import style from './../CARD/style.module.css'

interface cardProps {

    name: string;
    id: string;
    active: boolean;
    handleActiveCard: (id: string) => void;
}


export function Card({ active, id, name, handleActiveCard }: cardProps) {

    return (
        <div
            className={`${style.cardWrapper} ${(active) ? style.active : ''}`}
            onClick={() => handleActiveCard(id)}
        >

            <div className={style.card_FRONT}>

            </div>
            <div className={style.card_BACK}
            >
                <img
                    className={style.cardImages}
                    src={`../src/assets/${name}.png`}
                />
            </div>

        </div>
    )
}