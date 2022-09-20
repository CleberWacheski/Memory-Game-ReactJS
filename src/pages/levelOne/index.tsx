import style from './style.module.css'
import { useReducer } from 'react'
import { createCardGame } from '../../utils/createCardGame'
import { CARDS_LEVEL_ONE } from '../../CardsGame/levelOne'
import { Card } from '../../components/card'
import { reducer } from '../../reducer/reducer'
import { checkEndGame, checkIfMatchTwoCards, updateCardActive } from '../../reducer/actions'
import {Timer} from '../../components/timer'


interface activeCardsProps {
  name: string;
  id: string;
}

const CardGame = createCardGame(CARDS_LEVEL_ONE)
const activeOne = {} as activeCardsProps



export const LevelOne = () => {

  const [cardsState, dispatch] = useReducer(reducer, { CardGame, activeOne })

  function handleActiveCard(id: string) {

    dispatch(updateCardActive(id))

    setTimeout(() => {

      dispatch(checkIfMatchTwoCards())
      dispatch(checkEndGame())
    }, 500)

  }


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

