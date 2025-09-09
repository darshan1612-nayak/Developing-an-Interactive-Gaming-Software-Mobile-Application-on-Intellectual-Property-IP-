const quizData = [
    {
        question: "What does IP stand for?",
        options: ["Internet Protocol", "Intellectual Property", "Internal Process", "Information Protection"],
        answer: "Intellectual Property"
    },
    {
        question: "Which of these protects inventions?",
        options: ["Copyright", "Trademark", "Patent", "Trade Secret"],
        answer: "Patent"
    },
    {
        question: "Which protects brand names and logos?",
        options: ["Trademark", "Patent", "Copyright", "Trade Secret"],
        answer: "Trademark"
    },
    {
        question: "Which protects books, music, and software?",
        options: ["Patent", "Copyright", "Trademark", "Design"],
        answer: "Copyright"
    },
    {
        question: "A company secret formula is protected as?",
        options: ["Trade Secret", "Patent", "Trademark", "Copyright"],
        answer: "Trade Secret"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if(selected === quizData[currentQuestion].answer) score++;
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultEl.style.display = "block";
    scoreEl.innerText = score;
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) loadQuestion();
});

loadQuestion();
