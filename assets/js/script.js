// Set the arrays of standing data including images
let questions = ['Number of Players <i class="fas fa-user-friends"></i>', 'Competitive or Co-operative? <i class="fas fa-handshake"></i>', 'Game Weight <i class="fas fa-puzzle-piece"></i>'];
let pictures = ["assets/images/players.jpg", "assets/images/type.jpg", "assets/images/weight.jpg"];
let picturesAlt = ["three coloured meeples on a game board", "components on a Catan board", "a board game in progress"];
let gamePictures = ["assets/images/7WondersDuel.jpg", "assets/images/StarRealms", "assets/images/AeonsEnd.jpg", "assets/images/TheMind.jpg", "assets/images/Root.jpg", "assets/images/Wingspan.jpg", "assets/images/Pandemic.jpg", "assets/images/TheCrew.jpg", "assets/images/Scythe.jpg", "assets/images/CashnGuns.jpg", "assets/images/FlashPoint.jpg", "assets/images/Mysterium.jpg"];
let games = ["7 Wonders Duel", "Star Realms", "Aeons End", "The Mind", "Root", "Wingspan", "Pandemic", "The Crew", "Scythe", "Ca$h 'n Guns", "Flash Point", "Mysterium"];
let answers1 = ["2 players", "3 to 4 players", "5 or more players"];
let answers2 = ["Competitive", "Co-operative"];
let answers3 = ["Thinky Strategy", "Light or Party"];
let responses = {};

// Run question 1 by default upon loading the page
question1();

// Display question 1 including image
// Listens for when an answer is clicked to run the relevant function
function question1() {
    document.getElementById("question-area").innerHTML = questions[0];
    document.getElementById("image").src = pictures[0];
    document.getElementById("image").alt = picturesAlt[0];
    document.getElementById("answer1").innerHTML = answers1[0];
    document.getElementById("answer2").innerHTML = answers1[1];
    document.getElementById("answer3").innerHTML = answers1[2];

    document.getElementById("answer1").addEventListener("click", q1a1);
    document.getElementById("answer2").addEventListener("click", q1a2);
    document.getElementById("answer3").addEventListener("click", q1a3);
};

// Display question 2 including image
// Listens for when an answer is clicked to run the relevant function
function question2() {
    console.log(responses);

    document.getElementById("answer1").removeEventListener("click", q1a1);
    document.getElementById("answer2").removeEventListener("click", q1a2);
    document.getElementById("answer3").removeEventListener("click", q1a3);

    document.getElementById("question-area").innerHTML = questions[1];
    document.getElementById("image").src = pictures[1];
    document.getElementById("image").alt = picturesAlt[1];
    document.getElementById("answer1").innerHTML = answers2[0];
    document.getElementById("answer2").innerHTML = answers2[1];
    document.getElementById("answer3").style.display = "none";

    document.getElementById("answer1").addEventListener("click", q2a1);
    document.getElementById("answer2").addEventListener("click", q2a2);
    
};

// Display question 3 including image
// Listens for when an answer is clicked to run the relevant function
function question3() {
    console.log(responses);

    document.getElementById("answer1").removeEventListener("click", q2a1);
    document.getElementById("answer2").removeEventListener("click", q2a2);

    document.getElementById("question-area").innerHTML = questions[2];
    document.getElementById("image").src = pictures[2];
    document.getElementById("image").alt = picturesAlt[2];
    document.getElementById("answer1").innerHTML = answers3[0];
    document.getElementById("answer2").innerHTML = answers3[1];
    document.getElementById("answer3").style.display = "none";

    document.getElementById("answer1").addEventListener("click", q3a1);
    document.getElementById("answer2").addEventListener("click", q3a2);
};

// Displays the final result depending on the user's inputs to the questions
// Lists the full list of games for reference (not included on mobile for size)
function displayResponse() {
    console.log(responses);
    document.getElementById("question-area").innerHTML = 'Here is your game! <i class="fas fa-trophy"></i>';
    document.getElementById("answer-area").style.display = "none";
    document.getElementById("response-area").style.display = "block";
    document.getElementById("players-response").innerHTML = `Number of players: ${responses.players}`
    document.getElementById("type-response").innerHTML = `Game type: ${responses.type}`
    document.getElementById("weight-response").innerHTML = `Game weight: ${responses.weight}`

    if (responses.players === answers1[0] && responses.type === answers2[0] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[0];
        document.getElementById("image").src = gamePictures[0];
        document.getElementById("image").alt = `box art for ${games[0]}`;
    } else if (responses.players === answers1[0] && responses.type === answers2[0] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[1];
        document.getElementById("image").src = gamePictures[1];
        document.getElementById("image").alt = `box art for ${games[1]}`;
    } else if (responses.players === answers1[0] && responses.type === answers2[1] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[2];
        document.getElementById("image").src = gamePictures[2];
        document.getElementById("image").alt = `box art for ${games[2]}`;
    } else if (responses.players === answers1[0] && responses.type === answers2[1] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[3];
        document.getElementById("image").src = gamePictures[3];
        document.getElementById("image").alt = `box art for ${games[3]}`;
    } else if (responses.players === answers1[1] && responses.type === answers2[0] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[4];
        document.getElementById("image").src = gamePictures[4];
        document.getElementById("image").alt = `box art for ${games[4]}`;
    } else if (responses.players === answers1[1] && responses.type === answers2[0] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[5];
        document.getElementById("image").src = gamePictures[5];
        document.getElementById("image").alt = `box art for ${games[5]}`;
    } else if (responses.players === answers1[1] && responses.type === answers2[1] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[6];
        document.getElementById("image").src = gamePictures[6];
        document.getElementById("image").alt = `box art for ${games[6]}`;
    } else if (responses.players === answers1[1] && responses.type === answers2[1] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[7];
        document.getElementById("image").src = gamePictures[7];
        document.getElementById("image").alt = `box art for ${games[7]}`;
    } else if (responses.players === answers1[2] && responses.type === answers2[0] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[8];
        document.getElementById("image").src = gamePictures[8];
        document.getElementById("image").alt = `box art for ${games[8]}`;
    } else if (responses.players === answers1[2] && responses.type === answers2[0] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[9];
        document.getElementById("image").src = gamePictures[9];
        document.getElementById("image").alt = `box art for ${games[9]}`;
    } else if (responses.players === answers1[2] && responses.type === answers2[1] && responses.weight === answers3[0]) {
        document.getElementById("game-name").innerHTML = games[10];
        document.getElementById("image").src = gamePictures[10];
        document.getElementById("image").alt = `box art for ${games[10]}`;
    } else if (responses.players === answers1[2] && responses.type === answers2[1] && responses.weight === answers3[1]) {
        document.getElementById("game-name").innerHTML = games[11];
        document.getElementById("image").src = gamePictures[11];
        document.getElementById("image").alt = `box art for ${games[11]}`;
    };

    let allGames = "";
    for (let i in games) {
        allGames += games[i] + ", ";
    }
    document.getElementById("all-games").innerHTML = allGames;
};

// Button to allow the user to reset the page and start the questions again
document.getElementById("reset-button").addEventListener("click", function() {location.reload()})

// Set of functions to log the user's response and move onto the next question
function q1a1(){
    responses.players = answers1[0];
    question2();
}

function q1a2(){
    responses.players = answers1[1];
    question2();
}

function q1a3(){
    responses.players = answers1[2];
    question2();
}

function q2a1(){
    responses.type = answers2[0];
    question3();
}

function q2a2(){
    responses.type = answers2[1];
    question3();
}

function q3a1(){
    responses.weight = answers3[0];
    displayResponse();
}

function q3a2(){
    responses.weight = answers3[1];
    displayResponse();
}