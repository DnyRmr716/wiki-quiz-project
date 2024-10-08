currentQuestionIndex = 0;
strikes= 0
gameOver = false


function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

let availableQuestions;

const questionNumberElement = document.getElementById('question-number');
const articleTitleElement = document.getElementById('article-title')
const questionTextElement = document.getElementById('question-text');
const resultMessageElement = document.getElementById('result-message');
const realButton = document.getElementById('real-button');
const fakeButton = document.getElementById('fake-button');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const instructionsContainer = document.getElementById('instructions-container');
const quizContainer = document.getElementById('quiz-container');
const strikesElement = document.getElementById('strikes');

window.onload = function() {

    function initializeGame() {
        instructionsContainer.style.display = 'block';
        quizContainer.style.display = 'none';
        const closeInstructionsButton = document.getElementById('close-instructions');
        closeInstructionsButton.addEventListener('click', startQuiz);
        availableQuestions = shuffleArray(questions);
    }

    function startQuiz() {
        instructionsContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        renderQuestion();
    }

    function renderQuestion() {
        const currentQuestion = availableQuestions[currentQuestionIndex];

        let handleRealButtonClick;
        let handleFakeButtonClick;
    
        questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
        articleTitleElement.textContent = currentQuestion.articleTitle;
        questionTextElement.textContent = currentQuestion.description;
        resultMessageElement.textContent = '';
        nextButton.style.display = 'none';
    
        realButton.disabled = false;
        fakeButton.disabled = false;

        nextButton.addEventListener('click', nextQuestion);
    
        realButton.removeEventListener('click', handleRealButtonClick);
        fakeButton.removeEventListener('click', handleFakeButtonClick);
    
        handleRealButtonClick = () => {
            checkAnswer(true);
            realButton.removeEventListener('click', handleRealButtonClick);
            fakeButton.removeEventListener('click', handleFakeButtonClick);
        };
    
        handleFakeButtonClick = () => {
            checkAnswer(false);
            realButton.removeEventListener('click', handleRealButtonClick);
            fakeButton.removeEventListener('click', handleFakeButtonClick);
        };
    
        realButton.addEventListener('click', handleRealButtonClick);
        fakeButton.addEventListener('click', handleFakeButtonClick);
    }


    function checkAnswer(userAnswer) {
        const currentQuestion = availableQuestions[currentQuestionIndex];

        realButton.disabled = true;
        fakeButton.disabled = true;

        if (userAnswer === currentQuestion.isReal) {
            resultMessageElement.textContent = 'Correct!';
        } else {
            strikes++;
            resultMessageElement.textContent = 'Incorrect!';
        }

        strikesElement.textContent = `Strikes: ${strikes}`;

        checkGameOver();
        nextButton.style.display = 'block';
    }

    function nextQuestion(event) {
        event.stopPropagation();

        currentQuestionIndex++;

        if (currentQuestionIndex < availableQuestions.length) {
            renderQuestion();
        } else {
            endGame();
        }
    }

    function checkGameOver() {
        if (strikes >= 3) {
            gameOver = true;
            endGame();
        } else if (currentQuestionIndex >= 14) {
            gameOver = false; 
            endGame();
        }
    }

    function endGame() {
        realButton.disabled = true;
        fakeButton.disabled = true;
        nextButton.disabled = true;

        if (gameOver) {
            resultMessageElement.textContent = 'Game Over! You got 3 strikes.';
        } else {
            resultMessageElement.textContent = 'You Win! You Weirdo!';
        }

        restartButton.style.display = 'block';
        restartButton.addEventListener('click', restartGame);
    }

    function restartGame() {
        currentQuestionIndex = 0;
        strikes = 0;
        gameOver = false;
      
        availableQuestions = shuffleArray(questions); 
      
        strikesElement.textContent = 'Strikes: 0';
        resultMessageElement.textContent = '';
      
        restartButton.style.display = 'none';
        quizContainer.style.display = 'block'; 
      
        renderQuestion();
        nextButton.disabled = false;
    }
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);

    }

    initializeGame();
};
