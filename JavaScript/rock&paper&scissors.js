const getUserChoice = userInput => {userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
}
else{
  console.log("invalid input");
}};
// console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  let no = Math.floor(Math.random() * 3);
  switch(no) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    case 3:
      return 'bomb';
  }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'tie';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'computer won';
    }
    else {
      return 'user won';
    }
  }
  if(userChoice === 'bomb') {
    return 'user won';
  }
}

// console.log(determineWinner(getUserChoice('rock'), getComputerChoice));

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`user : ${userChoice}`);
  console.log(`computer : ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();