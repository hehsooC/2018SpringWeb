export class Game {

    Players: User[] = [
        { Name: 'Heh-Soo Choi', MyQuotes: [] },
        { Name: 'Player1', MyQuotes: [] },
        { Name: 'Player2', MyQuotes: [] },
        //{ Name: 'Player3', MyQuotes: [] }
    ];

    Dealer: string = 'Heh-Soo Choi';

    Picture: {
        url: string
    };
    
    PlayedQuotes: Quote[] = [
        { Text:'So many Reasons to be grumpy, so little time', PlayerName:'Player1', Chosen: false}
        // { Text: "Free Hugs? Go hug a cactus.", PlayerName: 'Player3', Chosen: false},
        // { Text:"Don't be racist. Hate Everyone.", PlayerName: 'Player4', Chosen: true},
        // { Text:"What doesn't kill you... Disappoints me", PlayerName: "Player2", Chosen: true}

    ];

}

export class User {

    Name: string;
    //Quote cards in a player's hand
    MyQuotes: string[];

}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;

    
}