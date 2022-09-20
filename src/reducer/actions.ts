import { useTimer } from "../utils/useTimer"

enum ACTIONS {
    updateCardActive = 'updateCardActive',
    checkIfMatchTwoCards = 'checkIfMatchTwoCards'
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
