const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const choice = arr[randomIndex];
    return choice;
}

console.log(getComputerChoice(choices));

button.addEventListener('click', function(e) {
    console.log(e.value);
});


// let playerResult = 0;
// let computerResult = 0;


// function myFunction(button) {
//     let playerSelection = button.value;
//     return playerSelection;
// }



// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', playRound(playerSelection, computerSelection));
// });


// console.log(myFunction(buttons));

// console.log(getComputerChoice(choices));


// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === computerSelection) {
//         return result = "You tie! Try again";
//         playRound();
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         playerResult += 1;
//         return result = "Congrats, you won!";
//     }
//     else if (playerSelection === 'rock' && computerSelection === `paper`) {
//         computerResult += 1;
//         return result = "You lose! Paper beats rock";
        
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         computerResult += 1;
//         return result = "You lose! Rock beats scissors";
        
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         playerResult += 1;
//         return result = "Congrats, you won!";
        
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         playerResult += 1;
//         return result = "congrats, you won!";
        
//     }
//     else {
//         computerResult += 1;
//         return result = "You lose! Scissors beats paper";
        
//     }
//     return playerResult;
//     return computerResult;
// }







// // function game() {
// //         const computerSelection = getComputerChoice(choices);
// //         const buttons = document.querySelectorAll('button');
// //             buttons.forEach((button) => {
// //                 button.addEventListener('click', playRound(playerSelection, computerSelection));
// //         });
// //         console.log(result);
// //         console.log("Player score:" + " " + playerResult + ", " + "Computer score:" + " " + computerResult);
// //     if (playerResult > computerResult) {
// //         console.log("Congratulations, you won!");
// //     }
// //     else {
// //         console.log("Sorry, you lose!");
// //     }
// // }

// // game();