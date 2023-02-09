var timerEL = document.querySelector("#time");
var startButtonEl = document.getElementById('start-button');
var startAreaEl = document.getElementById('starter-area');
var endScreenEl = document.getElementById("#end-screen");
var submitButton = document.getElementById("#submit")

var quizEl = document.getElementById("#questions");
var questionEl = document.getElementById("#question-title");
var answerEl = document.getElementById("#choices");
var messageEl = document.getElementById("#message");
var finalScoreEl = document.getElementById("#final-score");
var putName = document.getElementById("#putName");


var timer;
var timeLeft;

var randomQuestions;
var currentQuestion;

const Questions = [
    {
        id: 0,
        question: "What was first commercially sucessful videogame?",
        choices: [
            { text: "Pong", isCorrect: true },
            { text: "Mario", isCorrect: false },
            { text: "Rock,Paper,Scissors", isCorrect: false },
            { text: "Space Race", isCorrect: false },
        ]
    },
    {
        id: 1,
        question: "What was the best selling game of all time?",
        choices: [
            { text: "Mario", isCorrect: false },
            { text: "Fifa", isCorrect: false },
            { text: "Minecraft", isCorrect: true },
            { text: "Super Smash Brawl", isCorrect: false },
        ]
    },
    {
        id: 2,
        question: "What kind of animal is Sonic?",
        choices: [
            { text: "Alligator", isCorrect: false },
            { text: "Echindna", isCorrect: false },
            { text: "Hedgehog", isCorrect: true },
            { text: "Badger", isCorrect: false },
        ]
    },
    {
        id: 3,
        question: "When was the PS5 released?",
        choices: [
            { text: "November 2020", isCorrect: true },
            { text: "June 2019", isCorrect: false },
            { text: "December 2021", isCorrect: false },
            { text: "July 2022", isCorrect: false },
        ]
    },
    {
        id: 4,
        question: "What is the armored vehicle in Halo?",
        choices: [
            { text: "Blue Falcon", isCorrect: false },
            { text: "Ice Cream Truck", isCorrect: false },
            { text: "Warthog", isCorrect: true },
            { text: "Batmobile", isCorrect: false },
        ]
    },
    {
        id: 5,
        question: "Which company makes the best console?",
        choices: [
            { text: "Sony(Playstation", isCorrect: true },
            { text: "Mircosoft(Xbox)", isCorrect: false },
            { text: "Nintendo(Switch)", isCorrect: false },
            { text: "PC(any computer really)", isCorrect: false},
        ]
    },
    {
        id: 6,
        question: "Which game is widely regarded as the worst videogame ever created?",
        choices: [
            { text:"Atari ET", isCorrect: true },
            { text: "Last of Us 2", isCorrect: false},
            { text: "Postal 2", isCorrect: false},
            {text: "Night Trap", isCorrect: false},

        ]
    },
    {
        id: 7,
        question: "Who invented the video game?",
        choices: [
            {text: "William Higinbotham", isCorrect: true},
            {text: "Bobby Kotick", isCorrect: false},
            {text: "Andrew Wilson", isCorrect: false},
            {text: "Strauss Zelnick", isCorrect: false},
        ]
    },
    {
        id: 8,
        question: "Where are Nintendo Original headquarters located?",
        choices: [
            {text: "Los Angeles", isCorrect: false},
            {text: "New York", isCorrect: false},
            {text: "Kyoto", isCorrect: true},
            {text: "Shanghai", isCorrect: false},
        ]
    },
    {
        id: 9,
        question: "What was the relation of Kratos with Zeus in the game God of War?",
        chioces: [
            {text:"Father", isCorrect: false},
            {text: "Cousin", isCorrect: false},
            {text: "Son", isCorrect: true},
            {text: "Brother", isCorrect: false},
        ]
    },
    {
        id: 10,
        question: "What year was the PlayStation Portable first released in the USA?",
        chioces: [
            {text: "2019", isCorrect: false},
            {text: "2005", isCorrect: false},
            {text: "2004", isCorrect: true},
            {text: "2023", isCorrect: false},
        ]
    }
]
 function startQuiz () {
    timeLeft = 150;
    startButtonEl.disabled = true;
    randomQuestions = question.sort(function () {
        return Math.random() - 0.5;
    });
console.log(randomQuestions);
currentQuestion = 0;
startAreaEl.classList.add("hide");
quizEl.classList.remove("hide");
startTimer();
goToNextQuestion();
}

function goToNextQuestion() {
    renderQuestion(randomQuestions[currentQuestion]);
};

function renderQuestion(question) {
    questionEl.textContent = question.question;
    console.log(qiestion.answers);
    answerEl.textContent = forEach((answer) => {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = answer.text;
        choiceButton.classList.add("btn");
        if(answer.isCorrect) {
            choiceButton.dataset.corrrect = answer.corrrect;
        }
        answerEl.appendChild(choiceButton);
        choiceButton.addEventListener("click", pickTheAnswer);
    });
}

//peform repeatedly
function iterate(id) {

    //Getting the highscore display section
    var highscore = document.getElementsByClassName("highscore");
    // highscore[0].innerText = "";

    //Getting the question
    const question = document.getElementById("question");

    //setting the question text
    question.innerText = Questions[id].question;

    //getting the question options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text 
    op1.innerText = Questions[id].choices[0].text;
    op2.innerText = Questions[id].choices[1].text;
    op3.innerText = Questions[id].choices[2].text;
    op4.innerText = Questions[id].choices[3].text;
    op1.addEventListener("click",checkAnswer)
    op2.addEventListener("click",checkAnswer)
    op3.addEventListener("click",checkAnswer)
    op4.addEventListener("click",checkAnswer)

    // Providing the true or false value to the options
    op1.value = Questions[id].choices[0].isCorrect;
    op2.value = Questions[id].choices[1].isCorrect;
    op3.value = Questions[id].choices[2].isCorrect;
    op4.value = Questions[id].choices[3].isCorrect;


    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "yellow";
        op2.style.backgroundColor = "darkblue";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "purple";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "yellow";
        op3.style.backgroundColor = "purple";
        op4.style.backgroundColor = "darkblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "darkblue";
        op3.style.backgroundColor = "yellow";
        op4.style.backgroundColor = "purple";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "darkblue";
        op3.style.backgroundColor = "yellow";
        op4.style.backgroundColor = "purple";
        selected = op4.value;
    })
    
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
var currentQuestion = 0
if (start) {
    iterate(currentQuestion);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }

})

function checkAnswer(event){
    // console.log(Questions[currentQuestion].choices.value)
    console.log(typeof event.target.value)
    currentQuestion++
    iterate(currentQuestion)
}

//unhide quiz 











//getQuestion

//timer
function startTimer () {
    let timeLeft = timer;
    timerInterval = setInterval (() => {
        timeLeft --;
        document.querySelector("timer").textContent = timeLeft
        
        if(timeLeft===0) {
            endQuiz();
        }
    },1000);
}