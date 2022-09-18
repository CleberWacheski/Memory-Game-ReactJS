import style from './style.module.css'
import { useEffect, useState } from 'react'
import { createCardGame } from '../../src/utils/createCardGame'
import { CARDS } from '../../src/utils/LEVEL_ONE_CARDs'
import { Card } from './CARD'

const CardGame = createCardGame(CARDS)

interface activerCardsProps {
  name : string;
  id : string;
}


export const LevelOne = () => {

  const [cards, setCards] = useState(CardGame)
  const [activeOne, setActiveOne] = useState({} as activerCardsProps)


  function handleActiveCard(id: string) {

    setCards(state => {

      return state.map((card) => {

        if (card.id === id) {
          card.active = true
        }

        return card
      })

    })
  }

  function checkIfMatchTwoCards () {

    cards.forEach((card) => {
      if (card.active && !activeOne.name) {
        setActiveOne({ name : card.name , id : card.id})
      }
      else if (card.active ) {
        if (card.id != activeOne.id && card.name === activeOne.name) {
          setCards(state=> {
            return state.map((stateCard)=> {
              if (stateCard.id === card.id || stateCard.id === activeOne.id) {
                stateCard.active = false
                stateCard.match = true
              }
              return stateCard
            })
          })

          setActiveOne({name : '',id: '' })
        }

        if (card.name != activeOne.name) {

          setCards(state=> {
            return state.map((stateCard)=> {
              if (stateCard.id === card.id || stateCard.id === activeOne.id) {
                stateCard.active = false
              }
              return stateCard
            })
          })

          setActiveOne({name : '',id: '' })
        }
      }

    })
  }

  useEffect(()=> {
    setTimeout(()=> {
      checkIfMatchTwoCards()
    },400)
    
  },[cards])



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


// const activeCardOne = cards.find((card) => card.id === actives[0])
//       const activeCardTwo = cards.find((card) => card.id === actives[1])

//       if (activeCardOne!.name != activeCardTwo!.name) {
//         setCards((state) => {

//           return state.map((cardState) => {
//             if (cardState.id === activeCardOne!.id) {
//               cardState.active = false
//             }
//             else if (cardState.id === activeCardTwo!.id) {
//               cardState.active = false
//             }
//             return cardState
//           })
//         })
        
//       }