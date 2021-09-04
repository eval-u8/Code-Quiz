var body = document.body;

// create nav that holds hs link as well as timer
var nav = document.createElement('nav');
body.appendChild(nav);

// add high score link up top left
var viewHighScoreLink = document.createElement('a');
viewHighScoreLink.href = '#';        // NEED TO FINISH THIS LINK!!!!!!!!
viewHighScoreLink.textContent = 'View High Scores'
viewHighScoreLink.style.color = "#d916c8";
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

var welcomeHeading = document.createElement('h1');
welcomeHeading.textContent = "Coding Quiz Challenge";
welcomeHeading.style.textAlign = 'center';
welcomeHeading.style.marginTop = '10%';
mainDiv.appendChild(welcomeHeading);

var welcomePara = document.createElement('p');
welcomePara.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
welcomePara.style.width = '75%';
welcomePara.style.textAlign = 'center';
welcomePara.style.margin = '50px auto';
welcomePara.style.fontWeight = 'normal';
welcomePara.style.fontSize = '0.8em';
welcomeHeading.appendChild(welcomePara);

var startButton = document.createElement('button');
startButton.className = "start-button"
startButton.innerHTML = 'Start Quiz';
startButton.style.backgroundColor = "#202a6e";
startButton.style.border = "none";
startButton.style.color = "white";
startButton.style.borderRadius = "8px";
startButton.style.padding = "10px 30px";
startButton.style.textDecoration = "none";
startButton.style.fontSize = "25px";
welcomeHeading.appendChild(startButton);



// -------------------------------------------
