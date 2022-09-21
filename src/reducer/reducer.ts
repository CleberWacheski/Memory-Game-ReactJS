import { NavigateFunction } from "react-router-dom";
import { api } from "../services/api";

interface CardGame {
    name: string;
    active: boolean;
    match: boolean;
    id: string;
}

interface activeCardsProps {
    name: string;
    id: string;
}

interface ReducerProps {
    CardGame: CardGame[],
    activeOne: activeCardsProps
}


   


export const reducer = (state: ReducerProps, action: any) => {


    switch (action.type) {
        case ('updateCardActive'): {
            return {
                CardGame: state.CardGame.map((card) => {

                    if (card.id === action.payload.id) {
                        card.active = true
                    }
                    return card
                }),
                activeOne: state.activeOne
            }
        }

        case ('checkIfMatchTwoCards'): {

            let response = {
                CardGame: state.CardGame,
                activeOne: state.activeOne
            }

            state.CardGame.forEach((card) => {
                if (card.active && !state.activeOne.name) {

                    response = {
                        CardGame: state.CardGame,
                        activeOne: { name: card.name, id: card.id }
                    }

                }
                else if (card.active) {
                    if (card.id != state.activeOne.id && card.name === state.activeOne.name) {

                        const updateCard = state.CardGame.map((stateCard) => {

                            if (stateCard.id === card.id || stateCard.id === state.activeOne.id) {
                                stateCard.active = false
                                stateCard.match = true
                            }
                            return stateCard
                        })

                        response = {
                            CardGame: updateCard,
                            activeOne: { name: '', id: '' }
                        }
                    }

                    if (card.name != state.activeOne.name) {

                        const updateCard = state.CardGame.map((stateCard) => {
                            if (stateCard.id === card.id || stateCard.id === state.activeOne.id) {
                                stateCard.active = false
                            }
                            return stateCard
                        })
                        response = {
                            CardGame: updateCard,
                            activeOne: { name: '', id: '' }
                        }
                    }
                }

            })

            return response
        }

        case ('checkEndGame'): {

            let response = {
                CardGame: state.CardGame,
                activeOne: { name: '', id: '' }
            }

                const updateCard = state.CardGame.map((card) => {
                    card.match = false
                    card.active = false
                    return card
                })

                response.CardGame = updateCard
            

            return response

        }


    }

    return state
}

