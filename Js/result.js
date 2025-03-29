//selecting elements
const shownScore = document.querySelector(".score");
const saveButton = document.getElementById("save");
const username = document.querySelector(".Username");

//global variables
const currentScore = JSON.parse(localStorage.getItem("score")) || [];
const savedScores = JSON.parse(localStorage.getItem("savedScore")) || [];
shownScore.innerHTML = currentScore;

const saveScore = () => {
  const score = {
    name: username.value,
    value: currentScore,
  };
  savedScores.push(score);
  localStorage.setItem("savedScore", JSON.stringify(savedScores));
  username.value = ""; //meaning saved succesfully, an alert can be added
};

//defining eventListeners
saveButton.addEventListener("click", saveScore);
