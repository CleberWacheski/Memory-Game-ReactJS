import style from './style.module.css'
import { useEffect, useState } from 'react'
import { createCardGame } from '../../src/utils/createCardGame'
import { CARDS_LEVEL_ONE } from '../CardsGame/levelOne'
import { Card } from './CARD'
import { updateCardActive } from '../utils/gameLogic'

const CardGame = createCardGame(CARDS_LEVEL_ONE)

interface activerCardsProps {
  name: string;
  id: string;
}


export const LevelOne = () => {

  const [cards, setCards] = useState(CardGame)
  const [activeOne, setActiveOne] = useState({} as activerCardsProps)


  function handleActiveCard(id: string) {

    setCards(state => updateCardActive(state, id))

  }

  function checkIfMatchTwoCards() {

    cards.forEach((card) => {
      if (card.active && !activeOne.name) {
        setActiveOne({ name: card.name, id: card.id })
      }
      else if (card.active) {
        if (card.id != activeOne.id && card.name === activeOne.name) {
          setCards(state => {
            return state.map((stateCard) => {
              if (stateCard.id === card.id || stateCard.id === activeOne.id) {
                stateCard.active = false
                stateCard.match = true
              }
              return stateCard
            })
          })

          setActiveOne({ name: '', id: '' })
        }

        if (card.name != activeOne.name) {

          setCards(state => {
            return state.map((stateCard) => {
              if (stateCard.id === card.id || stateCard.id === activeOne.id) {
                stateCard.active = false
              }
              return stateCard
            })
          })

          setActiveOne({ name: '', id: '' })
        }
      }

    })
  }

  useEffect(() => {
    setTimeout(() => {
      checkIfMatchTwoCards()
    }, 400)

  }, [cards])



  return (
    <div className={style.gameboard} >
      <div className={style.boxCards}>
        {
          cards.map((card) =>
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
    </div>

  )
}

