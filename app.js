

function play(playerChoice) {
  let index = Math.floor(Math.random() * 3);

  let computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = computerOptions[index]

  console.log("Computer Played " + computerChoice)

  if (playerChoice == computerChoice) { //pRPS==cRPS
    console.log("Tie")
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("Player 1 Wins")
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins!")
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins!")
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("Player 1 wins!")
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("Player 1 wins!")
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins!")
  }
}


// player == computer, tie
//paper v rock
//paper v scissors
//scissors v rock
//random computer choice?