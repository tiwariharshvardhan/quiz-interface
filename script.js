// script.js

const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      option.textContent = questions[currentQuestion].options[index];
      option.classList.remove("correct", "incorrect");
    });
    document.getElementById("next-btn").classList.add("hide");
  }
  
  function selectAnswer(index) {
    const options = document.querySelectorAll(".option");
    if (index === questions[currentQuestion].answer) {
      options[index].classList.add("correct");
      score++;
    } else {
      options[index].classList.add("incorrect");
      options[questions[currentQuestion].answer].classList.add("correct");
    }
    document.getElementById("next-btn").classList.remove("hide");
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hide");
    document.getElementById("result").classList.add("hide");
    showQuestion();
  }
  
  document.addEventListener("DOMContentLoaded", showQuestion);
  