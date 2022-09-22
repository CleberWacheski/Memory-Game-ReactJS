import style from './style.module.css'
import { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import { createCardGame } from '../../utils/createCardGame'
import { CARDS_LEVEL_ONE } from '../../CardsGame/levelOne'
import { Card } from '../../components/card'
import { reducer } from '../../reducer/reducer'
import { checkEndGame, checkIfMatchTwoCards, updateCardActive } from '../../reducer/actions'
import { Timer } from '../../components/timer'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { UserContext } from '../../contexts/user'


interface activeCardsProps {
  name: string;
  id: string;
}

const CardGame = createCardGame(CARDS_LEVEL_ONE)
const activeOne = {} as activeCardsProps



export const LevelOne = () => {

  const [cardsState, dispatch] = useReducer(reducer, { CardGame, activeOne })
  const [start, setStart] = useState(false)
  const { user } = useContext(UserContext)
  const [timer, setTimer] = useState(0)

  let minutes = String(Math.floor(timer / 60)).padStart(2, '0')
  let seconds = String(timer % 60).padStart(2, '0')

  const navigation = useNavigate()


  function handleActiveCard(id: string) {

    if (start) {
      dispatch(updateCardActive(id))
      setTimeout(() => {
        dispatch(checkIfMatchTwoCards())
      }, 500)
    }

  }

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setTimer(state => state + 1)
      }, 1000)
    }
  }, [timer,start])


  useEffect(() => {

    setStart(false)
    dispatch(checkEndGame())

    if (!user.name) {
      navigation('/')
    }

  }, [])


  useEffect(() => {
    async function endGame() {

      const records = {
        LevelOne: `${minutes}:${seconds}`,
      }

      await api.put(`/users/${user._id}`, {
        records: { ...records }
      })

      setTimeout(() => {
        navigation('/Records')
      }, 1000)

    }

    if (cardsState.CardGame.every((card) => card.match === true && start)) {
      setStart(false)
      endGame()
    }

  }, [cardsState.CardGame])



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
      {(!start)
        ?
        <button onClick={() => setStart(true)} className={style.ButtonStart}>START</button>
        :
        <Timer minutes={minutes} seconds={seconds} />}
    </div>

  )

}

