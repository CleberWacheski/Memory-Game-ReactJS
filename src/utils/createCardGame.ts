import { v4 as uuidV4 } from 'uuid'
import { shuffleArray } from './shuffleArray';

interface cardsProps {
    name: string
}

interface CardGame {
    name: string;
    active: boolean;
    id: string;
}

export function createCardGame(cards: cardsProps[]): CardGame[] {
    
    const duplicate = [...cards, ...cards]

    const AddParamsInCard = duplicate.map((card) => {
        return {
            name : card.name,
            active : false,
            id : uuidV4()
        }
    })

    const sortCards = shuffleArray(AddParamsInCard)

    return sortCards
}