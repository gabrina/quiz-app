//selecting elements
const shownScore = document.querySelector(".score");
const saveButton = document.getElementById("save");
const username = document.querySelector(".Username");

//global variables
const currentScore = JSON.parse(localStorage.getItem("score"));
//this is rediculos, if the score is 0, since the first part of above line is falsy, it goes to the second part of our OR statement
const savedScores = JSON.parse(localStorage.getItem("savedScore")) || [];
shownScore.textContent = currentScore;
const saveScore = () => {
  const score = {
    name: username.value,
    value: currentScore,
  };
  savedScores.push(score);
  localStorage.setItem("savedScore", JSON.stringify(savedScores));
  //returning to the main menu
  window.location.assign("/index.html");
};

//defining eventListeners
saveButton.addEventListener("click", saveScore);
