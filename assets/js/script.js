
let questions = ["Number of Players", "Competitive or Co-operative?", "Game Weight"];
let pictures = ["assets/images/players.jpg", "assets/images/type.jpg", "assets/images/weight.jpg"];
let gamePictures = ["assets/images/7WondersDuel.jpg", "assets/images/StarRealms"]
let answers1 = ["2", "3 to 4", "5 or more"];
let answers2 = ["Competitive", "Co-operative"];
let answers3 = ["Thinky Strategy", "Light or Party"];
let responses = {};

question1()


function question1() {
    document.getElementById("question-area").innerHTML = questions[0];
    document.getElementById("image").src = pictures[0];
    document.getElementById("answer1").innerHTML = answers1[0];
    document.getElementById("answer2").innerHTML = answers1[1];
    document.getElementById("answer3").innerHTML = answers1[2];

    document.getElementById("answer1").addEventListener("click", function(){
        responses.players = "2 players";
        question2();
    });
    document.getElementById("answer2").addEventListener("click", function(){
        responses.players = "3 to 4 players";
        question2();
    });
    document.getElementById("answer3").addEventListener("click", function(){
        responses.players = "5 or more players";
        question2();
    });
};

function question2() {
    document.getElementById("question-area").innerHTML = questions[1];
    document.getElementById("image").src = pictures[1];
    document.getElementById("answer1").innerHTML = answers2[0];
    document.getElementById("answer2").innerHTML = answers2[1];
    document.getElementById("answer3").style.display = "none";

    document.getElementById("answer1").addEventListener("click", function(){
        responses.type = "Competitive";
        question3();
    });
    document.getElementById("answer2").addEventListener("click", function(){
        responses.type = "Co-operative";
        question3();
    });
    
};

function question3() {
    document.getElementById("question-area").innerHTML = questions[2];
    document.getElementById("image").src = pictures[2];
    document.getElementById("answer1").innerHTML = answers3[0];
    document.getElementById("answer2").innerHTML = answers3[1];
    document.getElementById("answer3").style.display = "none";

    document.getElementById("answer1").addEventListener("click", function(){
        responses.weight = "Thinky Strategy";
        displayResponse();
    });
    document.getElementById("answer2").addEventListener("click", function(){
        responses.weight = "Light or Party";
        displayResponse();
    });
};

function displayResponse() {
    document.getElementById("question-area").innerHTML = "Here's your game!";
    document.getElementById("answer-area").style.display = "none";
    document.getElementById("response-area").style.display = "block";
    document.getElementById("players-response").innerHTML = `Number of players: ${responses.players}`
    document.getElementById("type-response").innerHTML = `Game type: ${responses.type}`
    document.getElementById("weight-response").innerHTML = `Game weight: ${responses.weight}`

if (responses.players === "2 players" && responses.type === "Competitive" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "7 Wonders Duel";
    document.getElementById("image").src = gamePictures[0];
} else if (responses.players === "2 players" && responses.type === "Competitive" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "Star Realms";
    document.getElementById("image").src = gamePictures[1];
} else if (responses.players === "2 players" && responses.type === "Co-operative" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "Aeon's End"
} else if (responses.players === "2 players" && responses.type === "Co-operative" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "The Mind"
} else if (responses.players === "3 to 4 players" && responses.type === "Competitive" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "Root"
} else if (responses.players === "3 to 4 players" && responses.type === "Competitive" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "Wingspan"
} else if (responses.players === "3 to 4 players" && responses.type === "Co-operative" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "Pandemic"
} else if (responses.players === "3 to 4 players" && responses.type === "Co-operative" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "The Crew"
} else if (responses.players === "5 or more players" && responses.type === "Competitive" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "Scythe"
} else if (responses.players === "5 or more players" && responses.type === "Competitive" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "Ca$h 'n Guns"
} else if (responses.players === "5 or more players" && responses.type === "Co-operative" && responses.weight === "Thinky Strategy") {
    document.getElementById("game-name").innerHTML = "Flash Point"
} else if (responses.players === "5 or more players" && responses.type === "Co-operative" && responses.weight === "Light or Party") {
    document.getElementById("game-name").innerHTML = "Mysterium"
}
};

document.getElementById("reset-button").addEventListener("click", function() {location.reload()})
