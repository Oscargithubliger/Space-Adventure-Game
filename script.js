let score = 0;
let gameInterval;
let spaceship;
let asteroid;

function startGame() {
  document.getElementById("game-container").style.display = "flex";
  spaceship = document.getElementById("spaceship");
  spaceship.style.bottom = "0";
  asteroid = document.getElementById("asteroid");
  asteroid.style.left = Math.random() * (window.innerWidth - asteroid.offsetWidth) + "px";
  gameInterval = setInterval(moveAsteroid, 1000);
}

function moveAsteroid() {
  const currentBottom = parseInt(spaceship.style.bottom);
  const currentLeft = parseInt(asteroid.style.left);
  const spaceshipWidth = spaceship.offsetWidth;
  const asteroidWidth = asteroid.offsetWidth;
  const spaceshipHeight = spaceship.offsetHeight;
  const asteroidHeight = asteroid.offsetHeight;

  if (currentBottom <= spaceshipHeight && currentLeft <= spaceshipWidth && currentLeft + asteroidWidth >= spaceshipWidth) {
    gameOver();
  } else {
    score++;
    updateScore();
    asteroid.style.left = Math.random() * (window.innerWidth - asteroid.offsetWidth) + "px";
  }
}

function hitAsteroid() {
  score += 5;
  updateScore();
  asteroid.style.left = Math.random() * (window.innerWidth - asteroid.offsetWidth) + "px";
}

function updateScore() {
  document.getElementById("score-container").textContent = "Score: " + score;
}

function gameOver() {
  clearInterval(gameInterval);
  spaceship.style.bottom = "-100px";
  asteroid.style.display = "none";
  document.getElementById("game-over").style.display = "flex";
}

function restartGame() {
  score = 0;
  updateScore();
  spaceship.style.bottom = "0";
  asteroid.style.display = "block";
  document.getElementById("game-over").style.display = "none";
  startGame();
}

window.onload = function () {
  startGame();
};
