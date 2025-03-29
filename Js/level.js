const levels = document.querySelectorAll(".option");

// const level = JSON.parse(localStorage.getItem("level")) || "medium";
let level = null;

const levelHandler = (index) => {
  switch (index) {
    case 0:
      level = "easy";
      break;
    case 1:
      level = "medium";
      break;
    default:
      level = "hard";
      break;
  }
  localStorage.setItem("level", JSON.stringify(level));
  window.location.assign("/index.html");
};

levels.forEach((button, index) => {
  const handler = () => {
    levelHandler(index);
  };
  button.addEventListener("click", handler);
});
