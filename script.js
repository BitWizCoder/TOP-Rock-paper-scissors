function computerPlay () {
    item = ['rock', 'paper', 'scissors']
    num = Math.floor((Math.random() * 3) + 0);
    return item[num]
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player wins!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Computer wins!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'player wins!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Computer wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'player wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Computer wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'rock' ||
    playerSelection == 'paper' && computerSelection == 'paper' ||
    playerSelection == 'scissors' && computerSelection == 'scissors'
    ) {
        return 'This is a draw match!'
    } else {
        return 'Computer wins!'
    }
  }

// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));




function game () {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Choose:rock, paper, scissors');
        console.log(playRound(playerSelection, computerSelection))
     }
}

game()


// 
// Store items in an array
// get random number's for 3 items
// assign rnadom numbers as a index of array
// print the out put


// rock, paper, scissors
// scissors -> paper
// paper -> rock
// rock -> scissors