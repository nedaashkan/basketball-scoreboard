let homeScore = document.getElementById("home-score");
console.log(homeScore);
let homeScoreCount = 0;
console.log(homeScoreCount);

let guestScore = document.getElementById("guest-score");
console.log(guestScore);
let guestScoreCount = 0;
console.log(guestScoreCount);

function plusOneHome() {
  homeScoreCount = homeScoreCount + 1;
  homeScore.textContent = homeScoreCount;
}

function plusTwoHome() {
  homeScoreCount = homeScoreCount + 2;
  homeScore.textContent = homeScoreCount;
}

function plusThreeHome() {
  homeScoreCount = homeScoreCount + 3;
  homeScore.textContent = homeScoreCount;
}

function plusOneGuest() {
  guestScoreCount = guestScoreCount + 1;
  guestScore.textContent = guestScoreCount;
}

function plusTwoGuest() {
  guestScoreCount = guestScoreCount + 2;
  guestScore.textContent = guestScoreCount;
}

function plusThreeGuest() {
  guestScoreCount = guestScoreCount + 3;
  guestScore.textContent = guestScoreCount;
}

function newGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  homeScoreCount = 0;
  guestScoreCount = 0;
}
