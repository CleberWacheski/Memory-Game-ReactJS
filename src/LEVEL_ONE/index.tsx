import style from './style.module.css'
import { useEffect, useState } from 'react'
import { createCardGame } from '../../src/utils/createCardGame'
import { CARDS } from '../../src/utils/LEVEL_ONE_CARDs'
import { Card } from './CARD'

const CardGame = createCardGame(CARDS)


export const LevelOne = () => {

  const [cards, setCards] = useState(CardGame)
  const [activeOne, setActiveOne] = useState('')
  const [activeTwo, setActiveTwo] = useState('')

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

  useEffect(() => {


    
    if (activeOne === '' && activeOne != activeTwo) {
      cards.forEach((card) => {
        if (card.active) {
          setActiveOne(card.id)
        }
      })

    } else if (activeOne) {
      cards.forEach((card) => {
        if (card.active) {
          setActiveTwo(card.id)
        }
      })    
    }


  


  }, [cards])



  return (
    <div className={style.gameboard} >
      <div className={style.boxCards}>
        {
          cards.map((card) =>
            <Card
              key={card.id}
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