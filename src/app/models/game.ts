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
        "I came. I saw. I complained."
    ];
    Players: User[] = [
        new User("Player1"),
        new User("Player2"),
        new User("Player3"),
        new User("Player4")
    ];
    Picture: string = 'https://scontent.cdninstagram.com/t51.2885-15/e35/15803742_363191214059346_5346021728352993280_n.jpg?ig_cache_key=MTQyNjUyNDg4Njk0MzI5MzkyNA%3D%3D.2';
    PlayedQuotes: Quote[] = [
        new Quote("So many Reasons to be grumpy, so little time", "Player1", true),
        new Quote("Free Hugs? Go hug a cactus.", "Player3", false),
        new Quote("Don't be racist. Hate Everyone.", "Player4", true),
        new Quote("What doesn't kill you... Disappoints me", "Player2", true)

    ];

}

export class User {

    Name: string;
    constructor(Name: string){
        this.Name = Name;
    }
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;

    constructor(Text:string, PlayerName:string, Chosen:boolean){
        this.Text = Text;
        this.PlayerName = PlayerName;
        this.Chosen = Chosen;
    }
}