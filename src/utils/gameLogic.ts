import { useEffect } from "react";

interface CardGame {
    name: string;
    active: boolean;
    match : boolean;
    id: string;
}



export const updateCardActive  = (state : CardGame[],id : string) => {

    return state.map((card) => {

        if (card.id === id) {
          card.active = true
        }
        return card
      })
}
