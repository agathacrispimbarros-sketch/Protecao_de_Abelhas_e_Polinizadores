// Dados do mini-quiz
const quizData = {
    question: "As abelhas são os únicos polinizadores que existem na natureza?",
    correctAnswer: false, // Falso, existem borboletas, morcegos, pássaros, etc.
    explanationCorrect: "Exato! Borboletas, pássaros, morcegos e até o vento também são polinizadores essenciais.",
    explanationIncorrect: "Incorreto. Embora as abelhas sejam as mais famosas, borboletas, passarinhos e morcegos também polinizam."
};

// Inicializa a pergunta na tela
document.getElementById('quiz-question').innerText = quizData.question;

// Função para checar a resposta do usuário
function checkAnswer(userAnswer) {
    const feedbackElement = document.getElementById('quiz-feedback');
    
    if (userAnswer === quizData.correctAnswer) {
        feedbackElement.innerText = quizData.explanationCorrect;
        feedbackElement.style.color = "#27ae60"; // Verde para acerto
    } else {
        feedbackElement.innerText = quizData.explanationIncorrect;
        feedbackElement.style.color = "#c0392b"; // Vermelho para erro
    }
}
