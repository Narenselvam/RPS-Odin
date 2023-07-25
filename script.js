const playerchoice=document.querySelectorAll("button");
let win=0;
let lose=0;

function getComputerChoice() {
  const option = ['rock', 'paper', 'scissor'];
  let computerSelection = option[Math.floor(Math.random() * option.length)];
  return computerSelection;
}

function disableButtons() {
  playerchoice.forEach(elem => {
      elem.disabled = true
  })
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log("pc:"+computerSelection);
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissor' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissor')) {
      lose+=1;
      result='<br>you lose </br>'+'computer choice is-'+ computerSelection+' <br>pc score-</br>'+lose+'<br>your score is</br>'+win
      if(lose == 5){
          result+= '<h2 style="text-align:center;">you LOST the game</h2>'
          disableButtons()
      }
  } else if (playerSelection === computerSelection) {
    result="It is a tie"
  } else {
    win+=1;
      result='you win <br>computer choice is-</br>'+ computerSelection+'<br>your score=</br>'+win+'<br>Pc score is</br>'+lose
      if(win == 5){
          result+= '<h2 style="text-align:center;">You WON the game</h2>'
          disableButtons()
      }
  }
  document.getElementById('demo').innerHTML=result
  return
}


    playerchoice.forEach(button => {
      button.addEventListener('click', () => {
        playRound(button.value);
});
});


