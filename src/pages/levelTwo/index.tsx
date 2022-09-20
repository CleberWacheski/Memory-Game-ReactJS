import style from './style.module.css'
import { useReducer } from 'react'
import { createCardGame } from '../../utils/createCardGame'
import { Card } from '../../components/card'
import { reducer } from '../../reducer/reducer'
import { checkEndGame, checkIfMatchTwoCards, updateCardActive } from '../../reducer/actions'
import { CARDS_LEVEL_TWO } from '../../CardsGame/levelTwo'
import {Timer} from '../../components/timer'


interface activeCardsProps {
  name: string;
  id: string;
}

const CardGame = createCardGame(CARDS_LEVEL_TWO)
const activeOne = {} as activeCardsProps



export const LevelTwo = () => {

  const [cardsState, dispatch] = useReducer(reducer, { CardGame, activeOne })

  function handleActiveCard(id: string) {

    dispatch(updateCardActive(id))

    setTimeout(() => {
      dispatch(checkIfMatchTwoCards())
      dispatch(checkEndGame())
    }, 500)
  }

//   useEffect(() => {
//     if (cardsState.CardGame.every((card) => card.match === true)) {
     
//     }
//   }, [cardsState])

  return (
    <div className={style.gameboard}>
      <div className={style.boxCards}>
        {
          cardsState.CardGame.map((card) =>
            <Card
              key={card.id}
              match={card.match}
              active={card.active}
              id={card.id}
              name={card.name}
              handleActiveCard={handleActiveCard}
            />
          )
        }
      </div>
      <Timer /> 
    </div>

  )
}

