var body = document.body;

// create nav that holds hs link as well as timer
var nav = document.createElement('nav');
body.appendChild(nav);

// add high score link up top left
var viewHighScoreLink = document.createElement('a');
viewHighScoreLink.href = '#';        // NEED TO FINISH THIS LINK!!!!!!!!
viewHighScoreLink.textContent = 'View High Scores'
viewHighScoreLink.style.color = "#d916c8"; //bright pink
viewHighScoreLink.style.textDecoration = 'none';
viewHighScoreLink.style.fontSize = '1.2em';
viewHighScoreLink.style.marginLeft = '1em';
viewHighScoreLink.style.marginTop = '1em';
viewHighScoreLink.style.fontWeight = 'bold';
nav.appendChild(viewHighScoreLink);

// add timer top right
var timerDisplay = document.createElement('div');
timerDisplay.textContent = "Time - 0";
timerDisplay.style.fontSize = "1.5em";
timerDisplay.style.marginRight = "1em";
timerDisplay.style.marginTop = "1em";
nav.appendChild(timerDisplay);


// Initial page h1, p and button.
var mainDiv = document.createElement('div');
body.appendChild(mainDiv);

var centralHeader = document.createElement('h1');
centralHeader.textContent = "Coding Quiz Challenge";
centralHeader.style.textAlign = 'center';
centralHeader.style.marginTop = '10%';
mainDiv.appendChild(centralHeader);

var centralParag = document.createElement('p');
centralParag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
centralParag.style.width = '75%';
centralParag.style.textAlign = 'center';
centralParag.style.margin = '50px auto';
centralParag.style.fontWeight = 'normal';
centralParag.style.fontSize = '0.8em';
centralHeader.appendChild(centralParag);

var startButton = document.createElement('button');
startButton.className = "start-button"
startButton.innerHTML = 'Start Quiz';
startButton.style.backgroundColor = "#202a6e"; //dark purple almost blue
startButton.style.border = "none";
startButton.style.color = "white";
startButton.style.borderRadius = "8px";
startButton.style.padding = "10px 30px";
startButton.style.textDecoration = "none";
startButton.style.fontSize = "25px";
startButton.style.cursor = 'pointer';
centralHeader.appendChild(startButton);

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
            corrAns: "c",
        },
        {
            q: "The condition in an if/else statement is enclosed with ___________.",
            allAns: {
            a: "1. quotes",
            b: "2. curly brackets",
            c: "3. parenthesis",
            d: "4. square brackets",
            },
            corrAns: "c",
        },
        {
            q: "Arrays in JavaScript can be used to store ___________",
            allAns: {
            a: "1. numbers and strings",
            b: "2. other arrays",
            c: "3. booleans",
            d: "4. all of the above",
            },
            corrAns: "d",
        },
        {
            q: "String values must be enclosed within ________ when being assigned to variables.",
            allAns: {
            a: "1. commas",
            b: "2. curly brackets",
            c: "3. quotes",
            d: "4. parenthesis",
            },
            corrAns: "c",
        },
        {
            q: "A very useful tool used during development and debugging for printing content to the debugger is:",
            allAns: {
            a: "1. JavaScript",
            b: "2. terminal/bash",
            c: "3. for loops",
            d: "4. console.log",
            },
            corrAns: "d",
        },
        ];
var score = 0;

function mainGame() {
    function timer(){
        var timerValue = 75;
        var timer = setInterval(function(){
            timerDisplay.textContent = "Timer - " + timerValue;
            timerValue--;
            if (timerValue < 0) {
                clearInterval(timer);
                alert("Game Over!");
            }
        }, 1000);
    }
    timer();
    // for (var i = 0; i < questionsArr.length ; i++) {
        // centralHeader.textContent = questionsArr[1].q;
    // }
}

    // after timer starts get questions

// whenever the button is clicked, run mainGame
    startButton.addEventListener('click', mainGame);