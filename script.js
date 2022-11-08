var startButtonEl = document.getElementById('start-button');
//one main function that starts the quiz: startQuiz
var startAreaEl = document.getElementById('starter-area');
var questionsEl = document.getElementById('questions');
startButtonEl.addEventListener('click', function () { 
    startAreaEl.classList.add("hide")
    questionsEl.classList.remove("hide")
})
{/* <startButtonEl onclick="functionToExecute()"></startButtonEl> */ }
var Questions = [
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
            { text: "PC(any computer really)", isCorrect: false },
        ]
    }
]
//start
var start = true;

//peform repeatedly
function iterate(id) {

    //Getting the highscore display section
    var highscore = document.getElementsByClassName("highscore");
    // highscore[0].innerText = "";

    //Getting the question
    var question = document.getElementById("question");

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







// a timer function 





//getQuestion

