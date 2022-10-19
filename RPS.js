function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
     //    console.log(choice);
      return choice;
    
}
// let playerSelection = prompt("Please enter Rock, Paper, or Scissors: ");
let score = 0;
let computerscore = 0;

function playRound(playerSelection, computerSelection)
{
    
    if (playerSelection.toLowerCase() === computerSelection)
    {
        alert("It's a tie!");  
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection ==="scissors")
    {
         alert("You win! Rock beats scissors!");
         score++;
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection ==="rock")
    {
         alert("You win! Paper beats rock!");    
         score++;
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection ==="paper")
    {
         alert("You win! Scissors beats paper!");   
         score++;  
    }

    else if (playerSelection.toLowerCase() ==="scissors" && computerSelection ==="rock")
    {
         alert("You lose! Rock beats scissors!");
         computerscore++;
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection ==="paper")
    {
         alert("You lose! Paper beats rock!");
         computerscore++;
    }

    else if (playerSelection.toLowerCase() ==="paper" && computerSelection ==="scissors")
    {
         alert("You lose! Scissors beats paper!");
         computerscore++;
    }

    else
    {
       alert("Huh? Only enter rock, paper, or scissors.");
    }
}

function game()
{
    for (let i = 0; i < 5; i++) 
    {
     let playerSelection = prompt("Please enter Rock, Paper, or Scissors: ");
     let computerSelection = getComputerChoice();
     playRound(playerSelection, computerSelection);
     console.log("You:"+score);
     console.log("Computer:"+computerscore);
    }
    
    if(score > computerscore)
     {
          alert("You won!")
     }
     else if (score < computerscore)
     {
            alert("The computer wins!") 
     } 

}
 game();
//  let playerSelection = "rock";

