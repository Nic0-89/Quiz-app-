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
let answerChose = document.getElementById('answer-buttons');
let nextButton = document.getElementsByClassName('btn-next');

// to save the score of the player
let userScore = 0;


function startTrivia() {
    Pass
    
}

function displayQuestion() {
    pass
}



function answerSelected(){
    pass
}

function showPoints(){
    pass
}

function resetTrivia() {
    pass
}