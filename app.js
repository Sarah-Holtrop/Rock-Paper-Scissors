let gameResults = ["Player 1 Wins!", "Computer Wins!", "It's a tie! Play Again!"]

function play(playerChoice) {
  let playerPoint = 0;
  let computerPoint = 0;
  let index = Math.floor(Math.random() * 3);

  let computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = computerOptions[index]

  if (playerChoice == computerChoice) {
    playerPoint++;
    computerPoint++ //Draw
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerPoint++ //player wins
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerPoint++ //computer wins
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerPoint++ //computer wins
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerPoint++ //player wins
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerPoint++ //player wins
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerPoint++ //computer wins
  }
  update(playerChoice, computerChoice, playerPoint, computerPoint)
}

function update(playerChoice, computerChoice, playerPoint, computerPoint) {
  document.getElementById("player-rps").innerHTML = playerChoice;
  document.getElementById("computer-rps").innerHTML = computerChoice;
  if (playerPoint > computerPoint) {
    document.getElementById("game-result").innerHTML = gameResults[0];
    document.getElementById("game-result").style.color = "rgb(55, 180, 55)";

  } else if (playerPoint < computerPoint) {
    document.getElementById("game-result").innerHTML = gameResults[1];
    document.getElementById("game-result").style.color = "rgb(38, 45, 40)";

  } else if (playerPoint == computerPoint) {
    document.getElementById("game-result").innerHTML = gameResults[2];
    document.getElementById("game-result").style.color = "rgb(125, 0, 0)";

  }
}

