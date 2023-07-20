console.log("Hello");

const option = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
  let computerSelection = option[Math.floor(Math.random() * option.length)];
  return computerSelection;
}

const no = 5;

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissor' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissor')) {
    return "You Lose";
  } else if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    return 'You win!!';
  }
}

function game(no) {
  let win = 0;
  let lose = 0;
  for (let i = 0; i < no; i++) {
    const playerSelection = prompt("Enter choice");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    let tempW = playRound(playerSelection, computerSelection);
    if (tempW === "You Lose") {
      lose += 1;
    } else {
      win += 1;
    }
  }
  if (win > lose) {
    console.log("YOU WON!!!");
    console.log("Your score", win);
    console.log("computer  score",lose);
  } else {
    console.log("YOU LOSE");
    console.log("Your score", win);
    console.log("Computer score",lose);
  }
}

game(no);
