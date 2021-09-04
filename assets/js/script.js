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
var timerValue = 0;
var timerDisplay = document.createElement('div');
timerDisplay.textContent = "Time - " + timerValue;
timerDisplay.style.fontSize = "1.5em";
timerDisplay.style.marginRight = "1em";
timerDisplay.style.marginTop = "1em";
nav.appendChild(timerDisplay);


// Initial page h1, p and button.
var mainDiv = document.createElement('div');
body.appendChild(mainDiv);

var mainHeader = document.createElement('h1');
mainHeader.textContent = "Coding Quiz Challenge";
mainHeader.style.textAlign = 'center';
mainHeader.style.marginTop = '10%';
mainDiv.appendChild(mainHeader);

var mainParag = document.createElement('p');
mainParag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
mainParag.style.width = '75%';
mainParag.style.textAlign = 'center';
mainParag.style.margin = '50px auto';
mainParag.style.fontWeight = 'normal';
mainParag.style.fontSize = '0.8em';
mainHeader.appendChild(mainParag);

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
mainHeader.appendChild(startButton);

// -------------------------------------------
// create questions array
var questions = [
    {
        q: "Commonly used data types do NOT include...",
        a: "alerts",
    },
    {
        q: "The condition in an if/else statement is enclosed with ___________.",
        a: "parenthesis",
    },
    {
        q: "Arrays in JavaScript can be used to store ___________",
        a: "all of the above",
    },
    {
        q: "String values must be enclosed within ________ when being assigned to variables.",
        a: "quotes",
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "console.log",
    },
];
var score = 0;

function mainGame() {
    for (var i = 0; i < questions.length ; i++) {
        var answer = 
    }
}

// whenever the button is clicked, run mainGame
    startButton.onclick = mainGame();