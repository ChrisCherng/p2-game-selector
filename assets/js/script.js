
let questions = ["Number of Players", "Competitive or Co-operative?", "Game Weight"]
let pictures = []
let answers1 = ["2", "3 to 4", "5 or more"]
let answers2 = ["Competitive", "Co-operative"]
let answers3 = ["Thinky Strategy", "Light or Party"]
let responses = {}

question1()


function question1() {
    document.getElementById("question-area").innerHTML = questions[0];
    document.getElementById("picture-area").src = pictures[0];
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
}

function question2() {
    document.getElementById("question-area").innerHTML = questions[1];
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
    
}

function question3() {
    document.getElementById("question-area").innerHTML = questions[2];
    document.getElementById("answer1").innerHTML = answers3[0];
    document.getElementById("answer2").innerHTML = answers3[1];
    document.getElementById("answer3").style.display = "none";

    document.getElementById("answer1").addEventListener("click", function(){
        responses.type = "Thinky Strategy";
        displayResponse();
    });
    document.getElementById("answer2").addEventListener("click", function(){
        responses.type = "Light or Party";
        displayResponse();
    });
}

function displayResponse() {
    document.getElementById("answer-area").style.display = "none";
    document.getElementById("response-area").style.display = "block";
}

document.getElementById("reset-button").addEventListener("click", function() {location.reload()})
