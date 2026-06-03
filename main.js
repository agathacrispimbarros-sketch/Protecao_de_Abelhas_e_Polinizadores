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
// Objeto de dados para o Quiz do usuário
const quizChallenge = {
    question: "A polinização afeta apenas a produção de frutas, sem impacto em outros alimentos?",
    correctAnswer: false, // Falso. Impacta sementes, oleaginosas, pastagens, etc.
    explanationCorrect: "Perfeito! A polinização impacta a produção de legumes, vegetais, castanhas e até plantas usadas para alimentar o gado.",
    explanationIncorrect: "Não é bem assim. A polinização afeta sementes, grãos, óleos vegetais e o desenvolvimento de pastagens agrícolas."
};

// Exibe a pergunta na interface de forma dinâmica
document.getElementById('quiz-question').innerText = quizChallenge.question;

// Gerencia a verificação de acerto do botão clicado
function checkAnswer(userChoice) {
    const feedbackField = document.getElementById('quiz-feedback');
    
    if (userChoice === quizChallenge.correctAnswer) {
        feedbackField.innerText = quizChallenge.explanationCorrect;
        feedbackField.style.color = "#27ae60"; // Estilo verde para acertos
    } else {
        feedbackField.innerText = quizChallenge.explanationIncorrect;
        feedbackField.style.color = "#c0392b"; // Estilo vermelho para erros
    }
}
