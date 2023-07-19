console.log("Helloe");

const option=['rock','paper','scissor'];

function getComputerChoice(){
    let computerSelection=option[(Math.floor(Math.random() * option.length))];
    return computerSelection;

}
computerSelection=getComputerChoice();
const no= parseInt(prompt("Enter no Rounds"));

function playRound(playerSelection,computerSelection){
    if((playerSelection==='rock'&& computerSelection==='paper')||(playerSelection==='scissor'&&computerSelection==='rock')
    ||(playerSelection==='paper'&&computerSelection==='scissor')){
        // let lose = 1;
        // lose+=1;
        return "You Lose"
    }
    else if(playerSelection===computerSelection){
        return "<h1>It's a tie.</h1>";
    }
    else{
        return 'You win!!'
    }

}

function game(no){
    let win =0;
    let lose= 0;
    for (let i=0;i<no;i++){
    const playerSelection= prompt("Enter choice");
    console.log(getComputerChoice());
    console.log(playRound(playerSelection,computerSelection));
    let tempW =playRound(playerSelection,computerSelection);
    if(tempW==='You Lose'){
        lose+=1;
    }
    else{
        win+=1;
    }
}if (win>lose){
    console.log("YOU WON!!!");
    console.log(win);
}
else{
    console.log("YOU LOSE");
    console.log(lose);
}
}

game(no);
