interface CardGame {
    name: string;
    active: boolean;
    id: string;
}


export function shuffleArray(arr  : CardGame[]) {
    
for (let i = arr.length - 1; i > 0; i--) {
        
    const j = Math.floor(Math.random() * (i + 1));
    
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

return arr;
}

