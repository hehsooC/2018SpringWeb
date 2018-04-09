var axios = require("axios");

const QuotesStack = [
    "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk. -Doug Larson",
    "If you make listening and observation your occupation, you will gain much more than you can by talk. -Robert Baden-Powell",
    "One of the most sincere forms of respect is actually listening to what another has to say. -Bryant H. McGill",
    "Listening is a magnetic and strange thing, a creative force. The friends who listen to us are the ones we move toward. When we are listened to, it creates us, makes us unfold and expand. -Karl A. Menniger",
    "Everything in writing begins with language. Language begins with listening. -Jeanette Winterson",
    "If you're going to have a story, have a big story, or none at all.  -Joseph Campbell",
    "Those who tell the stories rule the world. -Hopi American Indian Proverb",
    "There's always room for a story that can transport people to another place. -J.K. Rowling",
    "Yes, in all my research, the greatest leaders looked inward and were able to tell a good story with authenticity and passion. -Deepak Chopra",
    "Transparency, honesty, kindness, good stewardship, even humor, work in businesses at all times. -John Gerzema",
    "Eyes so transparent that through them the soul is seen. -Theophile Gautier",
    "Truth never damages a cause that is just. -Mahatma Gandhi",
    "I just think we need more accountability and more transparency. -John Thune",
    "Alone we can do so little, together we can do so much. -Helen Keller",
    "I invite everyone to choose forgiveness rather than division, teamwork over personal ambition. -Jean-Francois Cope",
    "It takes two flints to make a fire. -Louisa May Alcott",
    "One of the things I've learned is to be receptive of feedback. -Ben Silbermann",
    "Seeking means: to have a goal; but finding means: to be free, to be receptive, to have no goal. -Herman Hesse",
    "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails. -William Arthur Ward",
    "Either you run the day, or they day runs you -Jim Rohn",
    "Adaptability is not imitation. It means power of resistance and assimilation.\nMahatma Gandhi",
    "People will try to tell you that all the great opportunities have been snapped up. In reality, the world changes every second, blowing new opportunities in all directions, including yours. -Ken Hakuta",
    "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns. ~ Bruce Lee",
    "Passion is energy. Feel the power that comes from focusing on what excites you. -Oprah Winfrey",
    "Any guy that's not working with the same amount of intensity and passion that I do, I don't want to know. -Zakk Wylde",
    "Surprise yourself every day with your own courage. -Denholm Elliott",
    "People tend to play in their comfort zone, so the best things are achieved in a state of surprise, actually. -Brian Eno",
    "Simplicity is the most difficult thing to secure in this world; it is the last limit of experience and the last effort of genius. -George Sand",
    "Life is really simple, but we insist on making it complicated.- Aristotle",
    "True forgiveness is when you can say, Thank you for that experience. -Oprah Winfrey",
    "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - Francis of Assisi",
    "I attribute my success to this: I never gave or took any excuse. -Florence Nightingale",
    "You miss 100% of the shots you don’t take. -Wayne Gretzky",
    "Every strike brings me closer to the next home run. -Babe Ruth",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "The most common way people give up their power is by thinking they don’t have any. - Alice Walker",
    "The mind is everything. What you think you become.  -Buddha",
    "The best time to plant a tree was 20 years ago. The second best time is now. -Chinese Proverb",
    "Eighty percent of success is showing up. -Woody Allen",
    "I am not a product of my circumstances. I am a product of my decisions. -Stephen Covey",
    "Every child is an artist.  The problem is how to remain an artist once he grows up. -Pablo Picasso",
    "You can never cross the ocean until you have the courage to lose sight of the shore. -Christopher Columbus",
    "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou",
    "Life shrinks or expands in proportion to one’s courage. -Anais Nin",
    "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. -Zig Ziglar",
    "The best revenge is massive success. -Frank Sinatra",
    "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. -Johann Wolfgang von Goethe",
    "The two most important days in your life are the day you are born and the day you find out why. -Mark Twain",
    "Whether you think you can or you think you can’t, you’re right. -Henry Ford",
    "Your time is limited, so don’t waste it living someone else’s life. -Steve Jobs",
    "Life is 10% what happens to me and 90% of how I react to it. -Charles Swindoll",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. -Mark Twain",
    "It does not matter how slowly you go as long as you do not stop. -Confucius",
    "Education costs money.  But then so does ignorance. -Sir Claus Moser",
    "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. -Jesse Owens",
    "If you want your children to turn out well, spend twice as much time with them, and half as much money. -Abigail Van Buren",
    "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.  -Ann Landers",
    "I would rather die of passion than of boredom. -Vincent van Gogh",
    "You become what you believe. -Oprah Winfrey",
    "It is never too late to be what you might have been. -George Eliot",
    "There are no traffic jams along the extra mile. -Roger Staubach",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "In order to succeed, your desire for success should be greater than your fear of failure. -Bill Cosby",
    "I didn’t fail the test. I just found 100 ways to do it wrong. -Benjamin Franklin",
    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. -Bob Dylan",
    "You take your life in your own hands, and what happens? A terrible thing, no one to blame. -Erica Jong",
    "If you want to lift yourself up, lift up someone else. -Booker T. Washington",
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. -Leonardo da Vinci",
    "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. -Marie Curie",
    "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. -Unknown",
    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. -Maya Angelou",
    "Remember that not getting what you want is sometimes a wonderful stroke of luck. -Dalai Lama",
    "Everything has beauty, but not everyone can see. -Confucius",
    "When I let go of what I am, I become what I might be. -Lao Tzu",
    "Fall seven times and stand up eight. -Japanese Proverb",
    "Start where you are. Use what you have.  Do what you can. -Arthur Ashe",
    "Teach thy tongue to say, “I do not know,” and thous shalt progress. -Maimonides",
    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. -Plato",
    "Believe you can and you’re halfway there. -Theodore Roosevelt",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.  -Booker T. Washington",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. -Erma Bombeck",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. -Jesus",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. -Aristotle",
    "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. -Vincent Van Gogh",
    "Dream big and dare to fail. -Norman Vaughan",
    "If you do what you’ve always done, you’ll get what you’ve always gotten. -Tony Robbins",
    "Do what you can, where you are, with what you have. -Teddy Roosevelt",
    "You may be disappointed if you fail, but you are doomed if you don’t try. -Beverly Sills",
    "Remember no one can make you feel inferior without your consent. -Eleanor Roosevelt",
    "Change your thoughts and you change your world. -Norman Vincent Peale",
    "If you can dream it, you can achieve it. -Zig Ziglar",
    "Nothing is impossible, the word itself says, “I’m possible!” -Audrey Hepburn",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "It’s not the years in your life that count. It’s the life in your years. -Abraham Lincoln",
    "Life is what we make it, always has been, always will be. -Grandma Moses",
    "Dreaming, after all, is a form of planning. -Gloria Steinem",
    "You can’t use up creativity.  The more you use, the more you have. -Maya Angelou",
    "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. -Oprah Winfrey",
    "Stay committed to your decisions and stay flexible in your approach. It's the end you're after. -Anthony Robbins"
    ];

var iCurrentQuote = 0;

var PicturesStack = [
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/26907788_1614183255284072_4356465325754439623_n.jpg?_nc_cat=0&oh=05560c2d560984bc2dc89c2cd21b1e10&oe=5B6ED5D1",
    "https://scontent.cdninstagram.com/t51.2885-15/e35/15803742_363191214059346_5346021728352993280_n.jpg?ig_cache_key=MTQyNjUyNDg4Njk0MzI5MzkyNA%3D%3D.2",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/29597820_1684078344961229_8294324594109308393_n.jpg?_nc_cat=0&oh=d0e334e7cb123adf45e37ee4e5870621&oe=5B367149"


];

// asyncronous function, if you have something in server please put it in PicturesStack
axios.get('https://api.imgflip.com/get_memes')
     .then( 
         response => PicturesStack = response.data.data.memes,
        err => console.log(err)
         ); // response - json, data.data.memes - will get data from data/meme from imgflip
    
var iCurrentPicture = 0;

/*
// ES7
class Game{
    Players;
    DealerId;

    PlayedQuotes;
    Picture;

    GetQuotes = () => QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);
}
*/

/*
// fix above to ES6
class Game {
    constructor(){
        this.Players = [];
        this.DealerId = null;

        this.PlayedQuotes = [];
        this.Picture = null;

        this.GetQuotes = () => QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);
    }
}
*/
/* catching an error
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });
*/
// old way to fix it
function Game() {
        this.Players = [];
        this.DealerId = null;

        this.PlayedQuotes = [];
        this.Picture = null;

        // get new cards to a player
        this.GetQuotes = () => QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);
        // '%' will avoid index out of bound error
        // 'this.Picture' is public variable
        this.FlipPicture = () => this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture+1) % PicturesStack.length ]; 
        
        this.SubmitQuote = (text, playerId) => this.PlayedQuotes.push({ Text: text, PlayerId: playerId }); // public property (CAP): private property (LOWER)
        this.ChooseQuote = text => {
            this.PlayedQuotes.find( x => x.Text == text).Chosen = true;
            this.DealerId = this.Players[this.DealerId = (this.DealerId + 1) % this.Players.length];
        }
}
module.exports = Game; // exporting an object itself not the result

/* without using 'class'
var GetQuotes = () => QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7); // give 7 cards to each person
module.exports.GetQuotes = GetQuotes;
*/