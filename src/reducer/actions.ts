import { NavigateFunction } from "react-router-dom"

enum ACTIONS {
    updateCardActive = 'updateCardActive',
    checkIfMatchTwoCards = 'checkIfMatchTwoCards',
    checkEndGame = 'checkEndGame'
}

export const updateCardActive = (id: string) => {
    return {
        type: ACTIONS.updateCardActive,
        payload: {
            id
        }
    }
}

export const checkIfMatchTwoCards = () => {
    return {
        type: ACTIONS.checkIfMatchTwoCards
    }
}

export const checkEndGame = () => {
    return {
        type: ACTIONS.checkEndGame
    }
}
