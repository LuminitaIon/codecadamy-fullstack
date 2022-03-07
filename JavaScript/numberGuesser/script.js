let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.ceil(Math.random() * 9) +1 
}
function getAbsoluteDistance(a, b) {
  return a-b
}
function compareGuesses(human, computer, target) {
  if(getAbsoluteDistance(target, human) < getAbsoluteDistance(computer, target)) {
    return true
  }
  else if(getAbsoluteDistance(target, human) > getAbsoluteDistance(computer, target)) {
    return false
  }
  else {
    return true
  }
}
function updateScore(winner) {
  if(winner === 'human') {
    humanScore += 1
  } else {
    computerScore += 1
  }
}

function advanceRound() {
  return currentRoundNumber += 1
}
const checkHumanGuess = (theGuess) => {
    if(theGuess < 0 || theGuess > 9){ 
        window.alert("Please make sure your guess is between 0 and 9");
    }
};
console.log(generateTarget());
compareGuesses(10, 5, generateTarget());
updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore);