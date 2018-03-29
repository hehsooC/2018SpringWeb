export class Game {
    //Quote cards in a player's hand
    MyQuotes: string[] = [
        "I think it's time... To quit my job.",
        "'Good Morning'?.. No such thing.",
        "I like the sound you make .. When you shut up.",
        "There are two types of people in this world .. And I don't like them.",
        "If stupidity was an illness, you'd be dead by now.",
        "I had fun once .. It was awful.",
        "TIME... is something I don't have for you.",
        "I came. I saw. I complained.",
        "So many Reasons to be grumpy, so little time",
        "Free Hugs? Go hug a cactus.",
        "Don't be racist. Hate Everyone.",
        "What doesn't kill you... Disappoints me"

    ];
    Players: User[] = [
        { Name: 'Heh-Soo Choi' },
        { Name: 'Nino' },
        { Name: 'Satoshi' },
        //{ Name: 'Sakurai' }
    ];

    Dealer: string = 'Heh-Soo Choi';

    Picture: string = 'https://scontent.cdninstagram.com/t51.2885-15/e35/15803742_363191214059346_5346021728352993280_n.jpg?ig_cache_key=MTQyNjUyNDg4Njk0MzI5MzkyNA%3D%3D.2';
    
    PlayedQuotes: Quote[] = [
        { Text:'So many Reasons to be grumpy, so little time', PlayerName:'Nino', Chosen: false}
        // { Text: "Free Hugs? Go hug a cactus.", PlayerName: 'Player3', Chosen: false},
        // { Text:"Don't be racist. Hate Everyone.", PlayerName: 'Player4', Chosen: true},
        // { Text:"What doesn't kill you... Disappoints me", PlayerName: "Player2", Chosen: true}

    ];

}

export class User {

    Name: string;

}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;

    
}