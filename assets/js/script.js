var body = document.body;
var currentQuestIndex = 0;

// create nav that holds hs link as well as timer and feedback div
var nav = document.createElement("nav");
body.appendChild(nav);

var feedback = document.createElement("div");
feedback.className = "feedback";
// feedback.setAttribute("id", "hide");
feedback.textContent = "";

// add high score link up top left
var viewHighScoreLink = document.createElement("a");
viewHighScoreLink.href = hsScreen; 
viewHighScoreLink.textContent = "View High Scores";
viewHighScoreLink.style.color = "#d916c8"; //bright pink
viewHighScoreLink.style.textDecoration = "none";
viewHighScoreLink.style.fontSize = "1.2em";
viewHighScoreLink.style.marginLeft = "1em";
viewHighScoreLink.style.marginTop = "1em";
viewHighScoreLink.style.fontWeight = "bold";
nav.appendChild(viewHighScoreLink);

// add timer top right
var timerDisplay = document.createElement("div");
timerDisplay.textContent = "Time - 0";
timerDisplay.style.fontSize = "1.5em";
timerDisplay.style.marginRight = "1em";
timerDisplay.style.marginTop = "1em";
nav.appendChild(timerDisplay);

// Initial page h1, p and button.
var mainDiv = document.createElement("div");
body.appendChild(mainDiv);

var centralHeader = document.createElement("h1");
centralHeader.textContent = "Coding Quiz Challenge";
centralHeader.style.textAlign = "center";
centralHeader.style.marginTop = "10%";
mainDiv.appendChild(centralHeader);

var centralParag = document.createElement("p");
centralParag.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
centralParag.style.width = "75%";
centralParag.style.textAlign = "center";
centralParag.style.margin = "50px auto";
centralParag.style.fontWeight = "lighter";
centralParag.style.fontSize = "1.8em";
mainDiv.appendChild(centralParag);

var startButton = document.createElement("button");
startButton.className = "start-button";
startButton.innerHTML = "Start Quiz";
startButton.style.border = "none";
startButton.style.color = "white";
startButton.style.borderRadius = "8px";
startButton.style.textDecoration = "none";
startButton.style.fontSize = "25px";
startButton.style.width = "25%";
startButton.style.padding = "10px 30px";
// startButton.style.position = "absolute";
startButton.style.cursor = "pointer";
mainDiv.appendChild(startButton);

// -------------------------------------------
// create questions array
var questionsArr = [
    {
        q: "Commonly used data types do NOT include...",
        allAns: {
            a: "1. strings",
            b: "2. booleans",
            c: "3. alerts",
            d: "4. numbers",
        },
        corrAns: "3. alerts",
    },
    {
        q: "The condition in an if/else statement is enclosed with ___________.",
        allAns: {
            a: "1. quotes",
            b: "2. curly brackets",
            c: "3. parenthesis",
            d: "4. square brackets",
        },
        corrAns: "3. parenthesis",
    },
    {
        q: "Arrays in JavaScript can be used to store ___________",
        allAns: {
            a: "1. numbers and strings",
            b: "2. other arrays",
            c: "3. booleans",
            d: "4. all of the above",
        },
        corrAns: "4. all of the above",
    },
    {
        q: "String values must be enclosed within ________ when being assigned to variables.",
        allAns: {
            a: "1. commas",
            b: "2. curly brackets",
            c: "3. quotes",
            d: "4. parenthesis",
        },
        corrAns: "3. quotes",
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        allAns: {
            a: "1. JavaScript",
            b: "2. terminal/bash",
            c: "3. for loops",
            d: "4. console.log",
        },
        corrAns: "4. console.log",
    },
];
var score = 0;

function mainGame() {
    startButton.style.display = "none";
    timerValue = 75;
    function timer() {
        var timer = setInterval(function () {
            timerDisplay.textContent = "Time - " + timerValue;
            timerValue--;
            if (timerValue < 0) {
                clearInterval(timer);
                // alert("Game Over!"); //PUT THE GAME OVER PART OF THE CODE
            }
        }, 1000);
    }
    timer();
    getQuestions();
}

function getQuestions() {
    body.appendChild(feedback);
    // save qs array in a var
    var currentQ = questionsArr[currentQuestIndex];
    centralHeader.textContent = currentQ.q;
    // clear question choices
    centralParag.innerHTML = "";
    // LOOP OVER CHOICES
    for (const [key, value] of Object.entries(currentQ.allAns)) {
        // console.log(`${key}: ${value}`);
        var ansOptionNode = document.createElement("button");
        ansOptionNode.className = "answer-option-node";
        ansOptionNode.setAttribute("value", `${value}`);
        ansOptionNode.textContent = `${value}`;
        // console.log(ansOptionNode);
        ansOptionNode.onclick = clickedAns;
        centralParag.appendChild(ansOptionNode);
    }
}

function clickedAns() {
    // Check if guess is wrong
    if (this.value !== questionsArr[currentQuestIndex].corrAns) {
        timerValue -= 10;
        if (timerValue < 0) {
            timerValue = 0;
        }
        timerDisplay.textContent = "Time - " + timerValue;
        feedback.textContent = "Wrong...";
    } else {
        feedback.textContent = "Correct!";
    }
    currentQuestIndex++;

    if (currentQuestIndex === questionsArr.length) {
        endGame();
    } else {
        getQuestions();
    }
}

// variables for endgame function
var hsInputButton = document.createElement("button");
hsInputButton.textContent = "Submit";
hsInputButton.className = "final-button";
var hsInput = document.createElement("input");
hsInput.setAttribute("type", "text");
hsInput.value = '';
hsInput.placeholder = "Enter initials here";
hsInput.className = "hs-input";

// endgame function updating header and p
    function endGame(){
        feedback.className = "hide";
        timerDisplay = timerValue;
        centralHeader.textContent = "You are done!!!";
        centralParag.textContent = "Your final score is ... " + timerValue + "!!!";
        var finalDiv = document.createElement('div');
        centralParag.appendChild(finalDiv);
        finalDiv.appendChild(hsInput);
        finalDiv.appendChild(hsInputButton);
        hsInputButton.onclick = hsScreenCheck;
    }

var hsName = '';
var hsScore = '';

    function hsScreenCheck(){
        if (hsInput.value === ''){
            alert("Since no value was placed in the High Score name box, 'Anonymous' will be used instead.");
            hsInput.value = "Anonymous";
            hsScreen;
        } else {
            hsScreen;
        }
    }

    function hsScreen() {

    }

// whenever the button is clicked, run mainGame
startButton.addEventListener("click", mainGame);
