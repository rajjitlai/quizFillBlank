// const correctAnswers = {
//     q1_answer: ["Hyper Text Markup Language"],
//     q2_answer: ["Cascading Style Sheets"],
//     q3_answer: ["JavaScript", "JS"],
//     q4_answer: ["ol tag", "ol"],
//     q5_answer: ["color"],
// }

const questions = [
    "1. What does HTML stand for?",
    "2. What is the full form of CSS?",
    "3. Which programming language is commonly used for adding interactivity to web pages?",
    "4. Which HTML tag is used to create an ordered list?",
    "5. Which CSS property is used to change the color of text?"
]

const correctAnswers = {
    q1_answer: "Hyper Text Markup Language",
    q2_answer: "Cascading Style Sheets",
    q3_answer: "JavaScript",
    q4_answer: "ol tag",
    q5_answer: "color",
}

const questionsContainer = document.getElementById("questionsContainer");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const submitButton = document.getElementById("submitButton");
const tryAgainButton = document.getElementById("tryAgainButton");

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateScore();
    showTryAgainButton();
    checkAnswers();
});

function checkAnswers() {
    Object.keys(correctAnswers).forEach(key => {
        const userAnswer = document.getElementById(key).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[key].toLowerCase();
        const answerInput = document.getElementById(key);

        if (userAnswer === correctAnswer) {
            answerInput.style.backgroundColor = "#4CAF50";
        } else {
            answerInput.style.backgroundColor = "#FF5733";
            answerInput.value = correctAnswers[key];
        }
    });
}

tryAgainButton.addEventListener("click", function () {
    resetForm();
    hideTryAgainButton();
});

function showTryAgainButton() {
    tryAgainButton.style.display = "block";
    submitButton.style.display = "none";
}

function hideTryAgainButton() {
    tryAgainButton.style.display = "none";
    submitButton.style.display = "block";
}

function resetForm() {
    quizForm.reset();
    quizResult.textContent = "";
    generateQuestions();
}

function generateQuestions() {
    questionsContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "questionDiv";
        questionDiv.innerHTML = `
            <p>${question}</p>
            <input type="text" class="answerInput" id="q${index + 1}_answer" required>
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    Object.keys(correctAnswers).forEach(key => {
        const userAnswer = document.getElementById(key).value.trim();
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    });
    const totalQuestions = Object.keys(correctAnswers).length;
    const resultText = `You got ${score} out of ${totalQuestions} correct.`;
    quizResult.textContent = resultText;
}

generateQuestions();
