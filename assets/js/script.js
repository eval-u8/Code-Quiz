var body = document.body;
var currentQuestIndex = 0;
var timerValue = 0;
var wholeNav = document.querySelector(".nav");
var navScoreLink = document.querySelector(".nav-high-score-link");
var navTimerDisplay = document.querySelector(".nav-timer-display");
var mainHeader = document.querySelector("#main-header");
var mainP = document.querySelector("#main-p");
var mainButton = document.querySelector("#main-button");
var mainHighScores = document.querySelector(".main-high-scores");
var sectionFeedback = document.querySelector(".section-feedback");
var score = 0;
var currentQuestIndex = 0;
var ansOptionNode = "";
var initialsInput = document.querySelector("#initials-input");
var submitHsButton = document.querySelector("#submit-hs");
var homeButton = document.querySelector("#home-button");
var clearHsButton = document.querySelector("#clear-hs-button");
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
// end of questions array

function mainPage() {
    navScoreLink.textContent = "View High Scores";
    navTimerDisplay.textContent = `Time Left - ${timerValue}`;
    mainHeader.textContent = "Coding Quiz Challenge";
    mainP.textContent =
        "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    mainButton.textContent = "Start Quiz";
    mainButton.className = "button";
    sectionFeedback.className = "section-feedback hide";
    initialsInput.className = "hide";
    submitHsButton.className = "hide";
    clearHsButton.className = "hide";
    homeButton.className = "hide";
    wholeNav.className = "nav";
}

function startQuiz() {
    mainButton.className = "hide";
    timerValue = 75;
    function timer() {
        var timer = setInterval(function () {
            navTimerDisplay.textContent = `Time Left - ${timerValue}`;
            timerValue--;
            if (timerValue < 0) {
                clearInterval(timer);
                alert("Game Over!");
                mainPage();
            } else if (
                mainHeader.textContent == "You are done!!!" ||
                mainHeader.textContent == "High Scores!"
            ) {
                clearInterval(timer);
            }
        }, 1000);
    }
    timer();
    getQuestions();
}

function getQuestions() {
    // save qs array in a var
    var currentQ = questionsArr[currentQuestIndex];
    mainHeader.textContent = currentQ.q;
    // clear question choices
    mainP.textContent = "";
    // LOOP OVER CHOICES
    for (const [key, value] of Object.entries(currentQ.allAns)) {
        // console.log(`${key}: ${value}`);
        ansOptionNode = document.createElement("button");
        ansOptionNode.className = "button answer-option-node";
        ansOptionNode.setAttribute("value", `${value}`);
        ansOptionNode.textContent = `${value}`;
        // console.log(ansOptionNode);
        ansOptionNode.onclick = clickedAns;
        mainP.appendChild(ansOptionNode);
    }
}

function clickedAns() {
    // Check if guess is wrong
    if (this.value !== questionsArr[currentQuestIndex].corrAns) {
        timerValue -= 10;
        if (timerValue < 0) {
            timerValue = 0;
        }
        navTimerDisplay.textContent = `Time Left - ${timerValue}`;
        sectionFeedback.className = "section-feedback";
        sectionFeedback.textContent = "Wrong...";
    } else {
        sectionFeedback.className = "section-feedback";
        sectionFeedback.textContent = "Correct!";
    }
    currentQuestIndex++;

    if (currentQuestIndex === questionsArr.length) {
        endGame();
    } else {
        getQuestions();
    }
}

function endGame() {
    ansOptionNode.className = "hide";
    sectionFeedback.className = "hide";
    navTimerDisplay.textContent = timerValue;
    mainHeader.textContent = "You are done!!!";
    mainP.textContent =
        "Your final score is ... " + navTimerDisplay.innerHTML + "!!!";
    initialsInput.className = "";
    submitHsButton.className = "button";
    wholeNav.className = "nav hide";
    submitHsButton.onclick = hsScreenCheck;
}

function hsScreenCheck() {
    if (initialsInput.value === "") {
        alert(
            "Since no value was placed in the High Score name box, 'Anonymous' will be used instead."
        );
        initialsInput.value = "Anonymous";
        hsScreen("Anonymous", timerValue);
    } else {
        hsScreen(initialsInput.value, timerValue);
    }
}

function hsScreen(name, score) {
    initialsInput.className = "hide";
    submitHsButton.className = "hide";
    var highScore = { name, score };
    var storedScore = localStorage.getItem("scores");
    if (storedScore === null) {
        mainP.textContent = "There are no high scores :(";
        localStorage.setItem("scores", JSON.stringify([highScore]));
    } else {
        var parsedScore = JSON.parse(storedScore);
        parsedScore.push(highScore);
        parsedScore.sort((a, b) => b.score - a.score);
        parsedScore.splice(10);
        localStorage.setItem("scores", JSON.stringify(parsedScore));
    }
    mainHeader.textContent = "High Scores!";
    mainP.innerHTML = parsedScore.map((score) => `<li>${score.name} - ${score.score}`).join("");

    homeButton.className = "button";
    clearHsButton.className = "";
    homeButton.onclick = refresh;
    clearHsButton.onclick = clearHighScore;
    // if (mainP.innerHTML == )
}

function clearHighScore() {
    localStorage.clear();
    hsScreen();
}

function refresh() {
    location.reload();
}

mainPage();
mainButton.addEventListener("click", startQuiz);