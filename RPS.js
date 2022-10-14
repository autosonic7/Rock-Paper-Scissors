function getComputerChoice()
{
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    // console.log(choice);
    
}

function playRound(playerSelection, computerSelection)
{
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        window.alert("It's a tie!");   
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection.toLowerCase()==="scissors")
    {
         window.alert("You win!");   
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection.toLowerCase()==="rock")
    {
         window.alert("You win!");   
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection.toLowerCase()==="paper")
    {
         window.alert("You win!");     
    }

    else
    {
       window.alert("You lose!");
    }
}
let playerSelection = prompt("Please enter Rock, Paper, or Scissors: ");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);