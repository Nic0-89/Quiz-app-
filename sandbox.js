const topicOne = [
    {
        question: 'Here goes the first trivia question?',
        answers: [
            { text: 'answer 1', correct: false },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: true },
            { text: 'answer 4', correct: false },
        ]
    },
    {
        question: 'Here goes the second trivia question?',
        answers: [
            { text: 'answer 1', correct: false },
            { text: 'answer 2', correct: true },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    },
    {
        question: 'Here goes the third trivia question?',
        answers: [
            { text: 'answer 1', correct: true },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    },
    {
        question: 'Here goes the fourth trivia question?',
        answers: [
            { text: 'answer 1', correct: false },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: true },
        ]
    }
]

const topicTwo = [
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
    }
]

// How to direct user to the question
let topicOneBtn= document.querySelector("#btn-1")
let topictwoBtn= document.querySelector("#btn-2")
topicOneBtn.addEventListener('click', function(){
     alert('option one press')
 });
 topictwoBtn.addEventListener('click', function(){
    alert('option two press')
});


let questionAsked = document.getElementById('question');
let answerButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementsByClassName('btn-next');

// to save the score of the player'
let currentQuestionIndex =0;
let userScore = 0;


function startTrivia() {
    currentQuestionIndex = 0;
    userScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();    
}

function displayQuestion() {
    resetState();
    let currentQuestion = questions(currentQuestionIndex);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.test;
        button.classList.add("button");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

fuction resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        userScore++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${userScore} out of ${questions.lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.lenght){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.lenght){
        handleNextButton();
    }else{
        startTrivia();
    }
})

function answerSelected(){
    pass
}

function showPoints(){
    pass
}

function resetTrivia() {
    pass
}