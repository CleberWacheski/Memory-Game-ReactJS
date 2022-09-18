import { v4 as uuidV4 } from 'uuid'

interface cardsProps {
    name: string
}

interface CardGame {
    name: string;
    active: boolean;
    match: boolean,
    id: string;
}

function shuffleArray(arr: CardGame[]) {

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}


export function createCardGame(cards: cardsProps[]): CardGame[] {

    const duplicate = [...cards, ...cards]

    const AddParamsInCard = duplicate.map((card) => {
        return {
            name: card.name,
            active: false,
            match: false,
            id: uuidV4()
        }
    })

    const sortCards = shuffleArray(AddParamsInCard)

    return sortCards
}