//importing other modules
import formatData from "./formatter.js";

//selecting elements
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.querySelector(".question");
const answerList = document.querySelectorAll(".answer");
const scoreValue = document.getElementById("score");
const shownQuestionIndex = document.getElementById("no");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");

//defining global objects
let formattedData = null;
let questionIndex = 0; //the index of the question which is currently displayed
let correctAnswer = null;
let score = 0;

//reading local storage for difficulty
const level = JSON.parse(localStorage.getItem("level")) || "medium"; //medium by default

//working with api
const URL = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

//the endpoint of the quiz, how it's shown to the user, replacing the questions in spot
const showQuestion = () => {
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.textContent = question;
  answerList.forEach((button, index) => {
    button.textContent = answers[index];
    button.dataset.index = index;
  });
};

//start is trigerred when questions are fetched
const start = () => {
  container.style.display = "flex";
  loader.style.display = "none";
  showQuestion();
};

//check if the selected answer by user is right
const checkAnswer = (event, selectedAnswer) => {
  //the correct answer index is saved in correctAnswer
  if (selectedAnswer == correctAnswer) {
    event.target.classList.add("correctAnswer");
    score += 10;
    scoreValue.textContent = score;
  } else {
    event.target.classList.add("incorrectAnswer");
    answerList[correctAnswer].classList.add("correctAnswer");
  }
  answerList.forEach((element) => {
    element.classList.remove("answer");
  });
};

//whatever must happens when user hit Next
const handleNextquestion = () => {
  questionIndex++; //differs from 0 to 9
  shownQuestionIndex.textContent = questionIndex + 1;
  showQuestion();
  //remove correct and incorrct classes
  // adding the answer class to all answers
  answerList.forEach((button) => {
    button.classList.remove("correctAnswer");
    button.classList.remove("incorrectAnswer");
    button.classList.add("answer");
  });
  if (questionIndex == 9) nextButton.remove();
};

const endGame = () => {
  
  window.location.assign("/result.html");
  localStorage.setItem("score", JSON.stringify(score));
};
//defining eventListeners
answerList.forEach((button, index) => {
  const handler = () => {
    checkAnswer(event, index);
  };
  button.addEventListener("click", handler);
});

finishButton.addEventListener("click", endGame);
nextButton.addEventListener("click", handleNextquestion);
window.addEventListener("load", fetchData);
