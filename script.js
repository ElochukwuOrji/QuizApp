const questions =[
    {
        question: "Which state is Learnable office located in?",
        choices: ["Abuja", "Port Harcourt", "Lagos", "Enugu"],
        answer: "Enugu"
    },
    {
        question: "What is the primary programming language used for web development?",
        choices: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Which of the following is not a mobile network operator in Nigeria?",
        choices: ["Airtel", "Sprint", "MTN", "Glo"],
        answer: "Sprint"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the smallest continent by land area?",
        choices: ["Europe", "Australia", "South America", "Antarctica"],
        answer: "Australia"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const progressElement = document.getElementById("progress");
    const nextButton = document.getElementById("next-button");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = 
        document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice);

        choicesElement.appendChild(button);
    });

    progressElement.textContent = `Score: ${score} | Question: ${currentQuestionIndex + 1} of ${questions.length}`;
    nextButton.style.display = "none";
}

function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

displayQuestion();