const geography = [
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "Tavalu", correct: false },
            { text: "San Marino", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari desert", correct: false },
            { text: "Arabian desert", correct: false },
            { text: "Sahara desert", correct: false },
            { text: "Antarctica desert", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "North America", correct: false },
            { text: "Africa", correct: false },
        ]
    }
]

const womenInHistory = [ //change to women in history??
    {
        question: 'What can we thank Grace Hopper for?',
        answers: [
            { text: 'She pretty much invented the nursing profession.', correct: false },
            { text: 'She wrote the first Sci-Fi novel, thus creating the genre.', correct: false },
            { text: 'That we can write code in English.', correct: true },
            { text: 'That we have widely available contraceptives.', correct: false },
        ]
    },
    {
        question: 'Who was Zheng Yi Sao?',
        answers: [
            { text: 'The first woman to graduate from Medical School.', correct: false },
            { text: 'The Greatest Pirate Who Ever Lived.', correct: true },
            { text: 'Key player in the civil rights movement.', correct: false },
            { text: 'Famous Impressionist painter.', correct: false },
        ]
    },
    {
        question: 'Who won the Nobel Prize for Literature in 1993?',
        answers: [
            { text: 'Toni Morrison', correct: true },
            { text: 'Maria Montessori', correct: false },
            { text: 'Alice Walker', correct: false },
            { text: 'Josephine Baker', correct: false },
        ]
    },

]
// How to direct user to the question
let geo = document.querySelector("#btn-1")
let women = document.querySelector("#btn-2")
let mainDiv = document.querySelector("#first-page")
//set variable to the clicked button
let geoclicked = false
let womenclicked = false

// to save the score of the player This parti ins new Nico
let userScore = 0;
let questionIndex = 0;
let questions = []

//this part is new Nico
geo.addEventListener('click', function () {
    geoclicked = true
    questions = geography
    questionIndex = 0;
    userScore = 0;
    nextButton.style.display = "block";
    mainDiv.style.display = 'none';
    document.querySelector("#app").style.display = 'block';
    showQuestion();
});
women.addEventListener('click', function () {
    womenclicked = true
    questions = womenInHistory
    questionIndex = 0;
    userScore = 0;
    nextButton.style.display = "block";
    mainDiv.style.display = 'none';
    document.querySelector("#app").style.display = 'block';
    showQuestion();
});

//variables for the main Question, answer button and next button

let questionAsked = document.getElementById('question');
let answerChose = document.getElementById('answer-buttons');
let nextButton = document.getElementById('btn-next');

function startTrivia() {
    questionIndex = 0;
    userScore = 0;
    questions = []
    nextButton.style.display = "block";
    nextButton.innerHTML = 'Next';
    mainDiv.style.display = 'block';
    document.querySelector("#app").style.display = 'none';
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionAsked.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerChose.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    })
}


function resetState() {
    nextButton.style.display = "none";
    while (answerChose.firstChild) {
        answerChose.removeChild(answerChose.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        userScore++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerChose.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionAsked.innerHTML = `You scored ${userScore} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}
function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
    } else {
        startTrivia();
    }
})
