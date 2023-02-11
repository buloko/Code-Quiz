var container = document.querySelector("#root");

function renderHighScores() {
  load = JSON.parse(localStorage.getItem("High-Scores"));
  if (!load) {
    return false;
  }
  for (var i = 0; i < load.length; i++) {
    var highScore = document.createElement("li");
    highScore.classList.add("button");
    highScore.textContent = load[i].name + ":" + load[i].score;
    container.appendChild(highScore);
  }
}
renderHighScores();