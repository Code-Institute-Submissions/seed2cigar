// Cigar game
const question = document.getElementById('question');

const choices = Array.from(document.getElementsByClassName('cigartext'));

const quizProgress = document.getElementById('quizProgress');

const scoreText = document.getElementById('score');

const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};

let acceptingAnswers = false;

let score = 0;

let questionCounter = 0;

let cigarQuesions = [];

let questions = [];

// Gets cigar quiz questions
fetch('cigarquestions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

// CONSTANTS Points and amounts of questions
const CORRECT_ANSWER = 20;
const MAX_QUESTIONS = 5;

// Starts game
startGame = () => {
    questionCounter = 0;
    score = 0;
    cigarQuesions = [...questions];
    getNewQuestion();
};

// Get and display new question and choices if there is any available or take user to the end page
getNewQuestion = () => {
    if (cigarQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    quizProgress.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * cigarQuesions.length);
    currentQuestion = cigarQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    cigarQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

// Handles the users choice on click and decides if it is correct or not. Then moves to the next question.
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_ANSWER);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1500);
    });
});
// Incrementing the users score and also displays the score.
incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};