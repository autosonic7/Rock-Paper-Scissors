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
         alert("You win! Rock beats scissors!");
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection ==="rock")
    {
         alert("You win! Paper beats rock!");    
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection ==="paper")
    {
         alert("You win! Scissors beats paper!");     
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection ==="rock")
    {
         alert("You lose! Rock beats scissors!");
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection ==="paper")
    {
         alert("You lose! Paper beats rock!");
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection ==="scissors")
    {
         alert("You lose! Scissors beats paper!");
    }

    else
    {
       alert("Huh? Only enter rock, paper, or scissors.");
    }
}
//  let playerSelection = "rock";
let computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
