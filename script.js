console.log("Helloe");

const option=['rock','paper','scissor'];

function getComputerChoice(){
    computerSelection=option[(Math.floor(Math.random() * option.length))];
    return computerSelection;

}
computerSelection=getComputerChoice();
playerSelection='paper';

function playRound(playerSelection,computerSelection){
    if((playerSelection==='rock'&& computerSelection==='paper')||(playerSelection==='scissor'&&computerSelection==='rock')
    ||(playerSelection==='paper'&&computerSelection==='scissor')){
        return "You Lose!"
    }
    else if(playerSelection===computerSelection){
        return "Its a tie"
    }
    else{
        return "You Win!!"
    }

}

console.log(getComputerChoice());
console.log(playRound(playerSelection,computerSelection));