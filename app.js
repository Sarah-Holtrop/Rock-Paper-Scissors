

function play(playerChoice) {

  let index = Math.floor(Math.random() * 3);

  let computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = computerOptions[index]

  console.log("Computer Played " + computerChoice)

  if (playerChoice == computerChoice) { //pRPS==cRPS
  } else if (playerChoice == "paper" && computerChoice == "rock") {
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
  } else if (playerChoice == "rock" && computerChoice == "paper") {
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
  }
  update(playerChoice, computerChoice)
}

function update(playerChoice, computerChoice) {
  document.getElementById("player-rps").innerHTML = playerChoice
  document.getElementById("computer-rps").innerHTML = computerChoice

}


// player == computer, tie
//paper v rock
//paper v scissors
//scissors v rock
//random computer choice?