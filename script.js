const ele = document.getElementById("startb");
ele.addEventListener("click", game);
const playerchoice=document.querySelectorAll("button");


function getComputerChoice() {
  const option = ['rock', 'paper', 'scissor'];
  let computerSelection = option[Math.floor(Math.random() * option.length)];
  return computerSelection;
}


function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log("pc:"+computerSelection);
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

function game() {
  let win = 0;
  let lose = 0;
    playerchoice.forEach(button => {
      button.addEventListener('click', () => {
        const playerSelection = button.value;
    let tempW = playRound(playerSelection);
    if (tempW === "You Lose") {
      lose += 1;
    } if(tempW === "You win!!"){
      win += 1;
    }
  
  if (win > lose) {
    console.log("YOU WON!!!");
    document.getElementById("demo").innerHTML ="you won - score:"+win;
    console.log("Your score", win);
    console.log("computer  score",lose);
   
  } else {
    console.log("YOU LOSE");
    console.log("Your score", win);
    console.log("Computer score",lose);
    document.getElementById("demo").innerHTML ="you lose, pc score"+lose;

  }
});
});
}


