import style from './style.module.css'
import { useContext, useEffect, useReducer } from 'react'
import { createCardGame } from '../../utils/createCardGame'
import { Card } from '../../components/card'
import { reducer } from '../../reducer/reducer'
import { checkIfMatchTwoCards, updateCardActive } from '../../reducer/actions'
import { CARDS_LEVEL_TWO } from '../../CardsGame/levelTwo'
import { Timer } from '../../components/timer'
import { useTimer } from '../../utils/useTimer'
import { UserContext } from '../../contexts/user'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'


interface activeCardsProps {
  name: string;
  id: string;
}

const CardGame = createCardGame(CARDS_LEVEL_TWO)
const activeOne = {} as activeCardsProps



export const LevelTwo = () => {

  const [cardsState, dispatch] = useReducer(reducer, { CardGame, activeOne })
  const { timer } = useTimer()
  const { user } = useContext(UserContext)

  const navigation = useNavigate()

  function handleActiveCard(id: string) {

    dispatch(updateCardActive(id))

    setTimeout(() => {
      dispatch(checkIfMatchTwoCards())
    }, 500)
  }

  useEffect(() => {
    if (!user.name) {
      navigation('/')
    }
  }, [])

  useEffect(() => {
    async function endGame() {

      const records = {
        LevelTwo: timer
      }

      const { data } = await api.put(`/user/${user._id}`, {
        records: { ...records }
      })

      console.log(data)
      navigation('/records')
    }

    if (cardsState.CardGame.every((card) => card.match === true)) {
      endGame()
    }
  }, [cardsState])


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

