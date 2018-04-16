export class Game {

    Players: User[];
    DealerId: string;

    PlayedQuotes: Quote[];
    Picture: {
        url: string
    };
    
    

}

export class User {

    Name: string;
    //Quote cards in a player's hand
    MyQuotes: string[];

}

export class Quote {
    Text: string;
    PlayerId: string;
    Chosen: boolean = false;

    
}