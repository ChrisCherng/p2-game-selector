// Comment to remove jshint validator warnings for older browsers
/*jshint esversion: 6 */

// Set the arrays of standing data including images
let games = [{
        game: '7 Wonders Duel',
        players: '2 players',
        type: 'Competitive',
        weight: 'Thinky Strategy',
        picture: 'assets/images/7WondersDuel.jpg',
    },
    {
        game: 'Star Realms',
        players: '2 players',
        type: 'Competitive',
        weight: 'Light or Party',
        picture: 'assets/images/StarRealms.jpg',
    },
    {
        game: 'Aeons End',
        players: '2 players',
        type: 'Co-operative',
        weight: 'Thinky Strategy',
        picture: 'assets/images/AeonsEnd.jpg',
    },
    {
        game: 'The Mind',
        players: '2 players',
        type: 'Co-operative',
        weight: 'Light or Party',
        picture: 'assets/images/TheMind.jpg',
    },
    {
        game: 'Root',
        players: '3 to 4 players',
        type: 'Competitive',
        weight: 'Thinky Strategy',
        picture: 'assets/images/Root.jpg',
    },
    {
        game: 'Wingspan',
        players: '3 to 4 players',
        type: 'Competitive',
        weight: 'Light or Party',
        picture: 'assets/images/Wingspan.jpg',
    },
    {
        game: 'Pandemic',
        players: '3 to 4 players',
        type: 'Co-operative',
        weight: 'Thinky Strategy',
        picture: 'assets/images/Pandemic.jpg',
    },
    {
        game: 'The Crew',
        players: '3 to 4 players',
        type: 'Co-operative',
        weight: 'Light or Party',
        picture: 'assets/images/TheCrew.jpg',
    },
    {
        game: 'Scythe',
        players: '5 or more players',
        type: 'Competitive',
        weight: 'Thinky Strategy',
        picture: 'assets/images/Scythe.jpg',
    },
    {
        game: 'Ca$h n Guns',
        players: '5 or more players',
        type: 'Competitive',
        weight: 'Light or Party',
        picture: 'assets/images/CashnGuns.jpg',
    },
    {
        game: 'Flash Point',
        players: '5 or more players',
        type: 'Co-operative',
        weight: 'Thinky Strategy',
        picture: 'assets/images/FlashPoint.jpg',
    },
    {
        game: 'Mysterium',
        players: '5 or more players',
        type: 'Co-operative',
        weight: 'Light or Party',
        picture: 'assets/images/Mysterium.jpg',
    },
];

let questions = [{
        question: 'Number of Players <i class="fas fa-user-friends"></i>',
        answers: ['2 players', '3 to 4 players', '5 or more players'],
        picture: 'assets/images/players.jpg',
        pictureAlt: 'three coloured meeples on a game board',
        key: 'players',
    },
    {
        question: 'Competitive or Co-operative? <i class="fas fa-handshake"></i>',
        answers: ['Competitive', 'Co-operative'],
        picture: 'assets/images/type.jpg',
        pictureAlt: 'components on a Catan board',
        key: 'type',
    },
    {
        question: 'Game Weight <i class="fas fa-puzzle-piece"></i>',
        answers: ['Thinky Strategy', 'Light or Party'],
        picture: 'assets/images/weight.jpg',
        pictureAlt: 'a board game in progress',
        key: 'weight',
    }
];

let responses = {};

let index = 0;

// Function to display the question on the site
function displayQuestion() {
    document.getElementById("question-area").innerHTML = questions[index].question;
    document.getElementById("image").src = questions[index].picture;
    document.getElementById("image").alt = questions[index].pictureAlt;
    document.getElementById("answer1").innerHTML = questions[index].answers[0];
    document.getElementById("answer2").innerHTML = questions[index].answers[1];
    document.getElementById("answer3").innerHTML = questions[index].answers[2];
    if (questions[index].answers.length < 3) {
        document.getElementById("answer3").style.display = "none";
    }
}

// Function to run the game
function runGame() {
    if (index < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question-area").innerHTML = 'Here is your game! <i class="fas fa-trophy"></i>';
        document.getElementById("answer-area").style.display = "none";
        document.getElementById("response-area").style.display = "block";
        document.getElementById("players-response").innerHTML = `Number of players: ${responses.players}`;
        document.getElementById("type-response").innerHTML = `Game type: ${responses.type}`;
        document.getElementById("weight-response").innerHTML = `Game weight: ${responses.weight}`;
        selectGame(responses.players, responses.type, responses.weight);
    }
}

// Run the game by default on loading the page
runGame();

// Event listeners for the three answer boxes
document.getElementById("answer1").addEventListener("click", function () {
    let newKey = questions[index].key;
    responses[newKey] = questions[index].answers[0];
    index += 1;
    runGame();
});
document.getElementById("answer2").addEventListener("click", function () {
    let newKey = questions[index].key;
    responses[newKey] = questions[index].answers[1];
    index += 1;
    runGame();
});
document.getElementById("answer3").addEventListener("click", function () {
    let newKey = questions[index].key;
    responses[newKey] = questions[index].answers[2];
    index += 1;
    runGame();
});

// Function to use the user's responses and select the correct game from the games object
function selectGame(playerNumber, gameType, gameWeight) {
    let result = games.findIndex(function (game, index) {
        if (game.players === playerNumber && game.type === gameType && game.weight === gameWeight)
            return true;
    });

    document.getElementById("game-name").innerHTML = games[result].game;
    document.getElementById("image").src = games[result].picture;
    document.getElementById("image").alt = `box art for ${games[result].game}`;

    let allGames = "";
    for (let i = 0; i < games.length - 1; i++) {
        allGames += games[i].game + ", ";
    }
    allGames += games[games.length - 1].game;
    document.getElementById("all-games").innerHTML = allGames;
}

// Button to allow the user to reset the page and start the questions again
document.getElementById("reset-button").addEventListener("click", function () {
    location.reload();
});