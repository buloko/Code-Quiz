var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var startArea = document.getElementById("starter-area");
var endScreenEl = document.getElementById("end-screen");
var submitButton = document.getElementById("submit");

var quizEl = document.getElementById("questions");
var questionEl = document.getElementById("question-title");
var answerEl = document.getElementById("choices");
var messageEl = document.getElementById("message");
var finalScoreEl = document.getElementById("final-score");
var putNameEl = document.getElementById("putName");

var timer;
var timeLeft
var score = 0;

var randomQuestions;
var currentQuestion;

var questions = [
  {
    // id: 0,
    question: "What was first commercially sucessful videogame?",
    answers: [
      { text: "Pong", correct: true },
      { text: "Mario", correct: false },
      { text: "Rock,Paper,Scissors", correct: false },
      { text: "Space Race", correct: false },
    ],
  },
  {
    // id: 1,
    question: "What was the best selling game of all time?",
    answers: [
      { text: "Mario", correct: false },
      { text: "Fifa", correct: false },
      { text: "Minecraft", correct: true },
      { text: "Super Smash Brawl", correct: false },
    ],
  },
  {
    // id: 2,
    question: "What kind of animal is Sonic?",
    answers: [
      { text: "Alligator", correct: false },
      { text: "Echindna", correct: false },
      { text: "Hedgehog", correct: true },
      { text: "Badger", correct: false },
    ],
  },
  {
    // id: 3,
    question: "When was the PS5 released?",
    answers: [
      { text: "November 2020", correct: true },
      { text: "June 2019", correct: false },
      { text: "December 2021", correct: false },
      { text: "July 2022", correct: false },
    ],
  },
  {
    // id: 4,
    question: "What is the armored vehicle in Halo?",
    answers: [
      { text: "Blue Falcon", correct: false },
      { text: "Ice Cream Truck", correct: false },
      { text: "Warthog", correct: true },
      { text: "Batmobile", correct: false },
    ],
  },
  {
    // id: 5,
    question: "Which company makes the best console?",
    answers: [
      { text: "Sony(Playstation", correct: true },
      { text: "Mircosoft(Xbox)", correct: false },
      { text: "Nintendo(Switch)", correct: false },
      { text: "PC(any computer really)", correct: false },
    ],
  },
  {
    // id: 6,
    question:
      "Which game is widely regarded as the worst videogame ever created?",
    answers: [
      { text: "Atari ET", correct: true },
      { text: "Last of Us 2", correct: false },
      { text: "Postal 2", correct: false },
      { text: "Night Trap", correct: false },
    ],
  },
  {
    // id: 7,
    question: "Who invented the video game?",
    answers: [
      { text: "William Higinbotham", correct: true },
      { text: "Bobby Kotick", correct: false },
      { text: "Andrew Wilson", correct: false },
      { text: "Strauss Zelnick", correct: false },
    ],
  },
  {
    // id: 8,
    question: "Where are Nintendo Original headquarters located?",
    answers: [
      { text: "Los Angeles", correct: false },
      { text: "New York", correct: false },
      { text: "Kyoto", correct: true },
      { text: "Shanghai", correct: false },
    ],
  },
  {
    // id: 9,
    question:
      "What was the relation of Kratos with Zeus in the game God of War?",
    answers: [
      { text: "Father", correct: false },
      { text: "Cousin", correct: false },
      { text: "Son", correct: true },
      { text: "Brother", correct: false },
    ],
  },
  {
    // id: 10,
    question:
      "What year was the PlayStation Portable first released in the USA?",
    answers: [
      { text: "2019", correct: false },
      { text: "2005", correct: false },
      { text: "2004", correct: true },
      { text: "2023", correct: false },
    ],
  },
];


function startQuiz() {
  timeLeft = 120;
  startButton.disabled = true;
  randomQuestions = questions.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(randomQuestions);
  currentQuestion = 0;
  startArea.classList.add("hide");
  quizEl.classList.remove("hide");
  answerEl.classList.remove("hide");
  startTimer();
  goToNextQuestion();
}

function goToNextQuestion() {
  renderQuestion(randomQuestions[currentQuestion]);
}

function renderQuestion(question) {
  questionEl.textContent = question.question;
  console.log(question.answers);
  answerEl.textContent = " ";
  question.answers.forEach((answer) => {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = answer.text;
    choiceButton.classList.add("button");
    if (answerEl.isCorrect) {
      choiceButton.dataset.correct = "true";
    }
    answerEl.appendChild(choiceButton);
    choiceButton.addEventListener("click", pickTheAnswer);
  });
}

function pickTheAnswer() {
  var isCorrect = this.dataset.correct === "true";

  if (isCorrect) {
    messageEl.textContent = "Correct";
    timeLeft = timeLeft + 10
  } else {
    messageEl.textContent = "Wrong";
    timeLeft = timeLeft - 10;
    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    goToNextQuestion();
  } else {
    endScreen();
  }
}
function endScreen() {
  clearInterval(timer);
  quizEl.classList.add("hide");
  endScreenEl.classList.remove("hide");
  finalScoreEl.textConten = timeLeft;
}
function saveHighscore(event) {
  var putName = putNameEl.value;
  console.log(putName);
  var highScore = JSON.parse(localStorage.getItem("High-Scores")) || [];
  highScore.push({ name: putName, score: timeLeft });
  console.log(highScore);
  localStorage.setItem("High-Scores", JSON.stringify(highScore));
  putNameEl.value = "";
};
//timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
startButton.addEventListener("click", startQuiz);

// submitButton.addEventListener("click", saveHighScore);

//peform repeatedly
// function iterate(id) {

//     //Getting the highscore display section
//     var highscore = document.getElementsByClassName("highscore");
//     // highscore[0].innerText = "";

//     //Getting the question
//     const question = document.getElementById("question");

//     //setting the question text
//     question.innerText = Questions[id].question;

//     //getting the question options
//     const op1 = document.getElementById('op1');
//     const op2 = document.getElementById('op2');
//     const op3 = document.getElementById('op3');
//     const op4 = document.getElementById('op4');

//     // Providing option text
//     op1.innerText = Questions[id].choices[0].text;
//     op2.innerText = Questions[id].choices[1].text;
//     op3.innerText = Questions[id].choices[2].text;
//     op4.innerText = Questions[id].choices[3].text;
//     op1.addEventListener("click",checkAnswer)
//     op2.addEventListener("click",checkAnswer)
//     op3.addEventListener("click",checkAnswer)
//     op4.addEventListener("click",checkAnswer)

//     // Providing the true or false value to the options
//     op1.value = Questions[id].choices[0].isCorrect;
//     op2.value = Questions[id].choices[1].isCorrect;
//     op3.value = Questions[id].choices[2].isCorrect;
//     op4.value = Questions[id].choices[3].isCorrect;

//     var selected = "";

//     // Show selection for op1
//     op1.addEventListener("click", () => {
//         op1.style.backgroundColor = "yellow";
//         op2.style.backgroundColor = "darkblue";
//         op3.style.backgroundColor = "red";
//         op4.style.backgroundColor = "purple";
//         selected = op1.value;
//     })

//     // Show selection for op2
//     op2.addEventListener("click", () => {
//         op1.style.backgroundColor = "red";
//         op2.style.backgroundColor = "yellow";
//         op3.style.backgroundColor = "purple";
//         op4.style.backgroundColor = "darkblue";
//         selected = op2.value;
//     })

//     // Show selection for op3
//     op3.addEventListener("click", () => {
//         op1.style.backgroundColor = "red";
//         op2.style.backgroundColor = "darkblue";
//         op3.style.backgroundColor = "yellow";
//         op4.style.backgroundColor = "purple";
//         selected = op3.value;
//     })

//     // Show selection for op4
//     op4.addEventListener("click", () => {
//         op1.style.backgroundColor = "red";
//         op2.style.backgroundColor = "darkblue";
//         op3.style.backgroundColor = "yellow";
//         op4.style.backgroundColor = "purple";
//         selected = op4.value;
//     })

//     // Grabbing the evaluate button
//     const evaluate = document.getElementsByClassName("evaluate");

//     // Evaluate method
//     evaluate[0].addEventListener("click", () => {
//         if (selected == "true") {
//             result[0].innerHTML = "True";
//             result[0].style.color = "green";
//         } else {
//             result[0].innerHTML = "False";
//             result[0].style.color = "red";
//         }
//     })
// }
// var currentQuestion = 0
// if (start) {
//     iterate(currentQuestion);
// }

// // Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
//     start = false;
//     if (id < 2) {
//         id++;
//         iterate(id);
//         console.log(id);
//     }

// })

// function checkAnswer(event){
//     // console.log(Questions[currentQuestion].choices.value)
//     console.log(typeof event.target.value)
//     currentQuestion++
//     iterate(currentQuestion)
// }

//unhide quiz

//getQuestion
