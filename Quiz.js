const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

// Define different types of quizzes
const spaceMissionsQuiz = [
    { question: 'When was the first manned mission to the Moon?', answers: ['1969', '1972', '1975'], correctAnswer: '1969' },
    { question: 'Which spacecraft was the first to land on Mars?', answers: ['Viking 1', 'Curiosity', 'Opportunity'], correctAnswer: 'Viking 1' },
    { question: 'What was the name of the first artificial satellite launched into space?', answers: ['Sputnik 1', 'Explorer 1', 'Vanguard 1'], correctAnswer: 'Sputnik 1' },
    { question: 'Which space agency launched the Hubble Space Telescope?', answers: ['NASA', 'ESA', 'Roscosmos'], correctAnswer: 'NASA' }
    // Add more questions...
];

const planetsQuiz = [
    { question: 'Which planet is closest to the Sun?', answers: ['Mercury', 'Venus', 'Earth'], correctAnswer: 'Mercury' },
    { question: 'Which planet is known as the "Red Planet"?', answers: ['Mars', 'Venus', 'Jupiter'], correctAnswer: 'Mars' },
    { question: 'Which planet has the most moons?', answers: ['Jupiter', 'Saturn', 'Neptune'], correctAnswer: 'Jupiter' },
    { question: 'What is the largest planet in our solar system?', answers: ['Jupiter', 'Saturn', 'Neptune'], correctAnswer: 'Jupiter' }
];
    // Add more questions...


const starsQuiz = [
    { question: 'Which star is the closest to Earth?', answers: ['Sun', 'Alpha Centauri', 'Sirius'], correctAnswer: 'Sun' },
    { question: 'Which star is known as the "North Star"?', answers: ['Polaris', 'Betelgeuse', 'Vega'], correctAnswer: 'Polaris' },
    { question: 'Which star is the brightest in the night sky?', answers: ['Sirius', 'Alpha Centauri', 'Canopus'], correctAnswer: 'Sirius' },
    { question: 'What is the nearest known star to the Sun?', answers: ['Proxima Centauri', 'Alpha Centauri A', 'Alpha Centauri B'], correctAnswer: 'Proxima Centauri' }
];


let currentQuiz = [];

function showQuestions(quiz) {
    // Clear previous questions
    questionContainer.innerHTML = '';
    questionContainer.classList.remove('hidden');
    submitButton.classList.remove('hidden');

    // Reset currentQuiz
    currentQuiz = quiz;

    // Build quiz questions
    quiz.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${question.question}</p>
            <ul>
                ${question.answers.map(answer => `
                    <li>
                        <input type="radio" id="answer-${index}-${answer}" name="question-${index}" value="${answer}">
                        <label for="answer-${index}-${answer}">${answer}</label>
                    </li>`).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const userAnswers = [];
    currentQuiz.forEach((question, index) => {
        const selectedAnswer = questionContainer.querySelector(`input[name="question-${index}"]:checked`);
        userAnswers.push(selectedAnswer ? selectedAnswer.value : '');
    });

    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuiz[index].correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `<p>Your score: ${score}/${currentQuiz.length}</p>`;
}

submitButton.addEventListener('click', () => showResults());





