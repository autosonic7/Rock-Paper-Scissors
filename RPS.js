function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
       console.log(choice);
      return choice;
    
}
let playerSelection = prompt("Please enter Rock, Paper, or Scissors: ");

function playRound(playerSelection, computerSelection)
{
    
    if (playerSelection.toLowerCase() === computerSelection)
    {
        alert("It's a tie!");  
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection ==="scissors")
    {
         alert("You win!");
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection ==="rock")
    {
         alert("You win!");    
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection ==="paper")
    {
         alert("You win!");     
    }

    else
    {
       alert("You lose!");
    }
}
//  let playerSelection = "rock";
let computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
