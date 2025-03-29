//reading local storage
const savedScores = JSON.parse(localStorage.getItem("savedScore")) || [];

//selecting elements
const container = document.querySelector(".container");

if (savedScores.length > 0) {
  savedScores.forEach((element, index) => {
    console.log(element, index);
    container.innerHTML += `<div class="row">
  <div class="left">
    <div class="score-rank">${index + 1}</div>
    <div class="score-name">${element.name}</div>
  </div>
  <div class="right">
    <div class="value">${element.value}</div>
  </div>
</div>`;
  });
} else {
  container.innerHTML += `<div class="row" style="text-align:center;display:block;color:#6757d9">
 ¯\_(ツ)_/¯
  </div>`;
}
container.innerHTML += `<a href="/index.html" class="button">Go Home</a>`;
