//importing other modules
import formatData from "./formatter.js";

//selecting elements
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.querySelector(".question");
const answerList = document.querySelectorAll(".answer");

//defining global objects
let formattedData = null;
let questionIndex = 0; //the index of the question which is currently displayed
let correctAnswer = null;

//working with api
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

const showQuestion = () => {
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.textContent = question;
  answerList.forEach((button, index) => {
    button.textContent = answers[index];
  });
};

//start is trigerred when questions are fetched
const start = () => {
  container.style.display = "flex";
  loader.style.display = "none";
  showQuestion();
};

const checkAnswer = () => {};

//defining eventListeners
answerList.forEach((button, index) => {
  button.addEventListener("click", checkAnswer);
});
window.addEventListener("load", fetchData);
