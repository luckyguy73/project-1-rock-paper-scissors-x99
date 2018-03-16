let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, 
  playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType, 
  playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue, 
  playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;
const mTypes = ['rock', 'paper', 'scissors'];

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, 
  moveTwoValue, moveThreeType, moveThreeValue) {
  if(moveOneValue > 0 && moveOneValue < 100 && moveTwoValue > 0 && moveTwoValue < 100  && 
    moveThreeValue > 0 && moveThreeValue < 100 && (moveOneValue + moveTwoValue + 
      moveThreeValue < 100)) {
    if (mTypes.includes(moveOneType) && mTypes.includes(moveTwoType) && 
      mTypes.includes(moveThreeType)) {
        if(player === 'Player One') {
          playerOneMoveOneType = moveOneType;
          playerOneMoveTwoType = moveTwoType;
          playerOneMoveThreeType = moveThreeType;
          playerOneMoveOneValue = moveOneValue;
          playerOneMoveTwoValue = moveTwoValue;
          playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
          playerTwoMoveOneType = moveOneType;
          playerTwoMoveTwoType = moveTwoType;
          playerTwoMoveThreeType = moveThreeType;
          playerTwoMoveOneValue = moveOneValue;
          playerTwoMoveTwoValue = moveTwoValue;
          playerTwoMoveThreeValue = moveThreeValue;
        }
    }
  }
}

function getRoundWinner(round) {
  switch (round) {
      case 1:
        if(!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType || 
          !playerTwoMoveOneValue) 
          return null;
        if(playerOneMoveOneType === playerTwoMoveOneType) {
          if(playerOneMoveOneValue > playerTwoMoveOneValue)
            return 'Player One';
          else if(playerOneMoveOneValue < playerTwoMoveOneValue)
            return 'Player Two';
          else 
            return 'Tie';
        } else if(playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors')
            return 'Player One';
          else if(playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock')
            return 'Player One';
          else if(playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper')
            return 'Player One';
          else
            return 'Player Two';
      case 2:
        if(!playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveTwoType || 
          !playerTwoMoveTwoValue) 
          return null;
        if(playerOneMoveTwoType === playerTwoMoveTwoType) {
          if(playerOneMoveTwoValue > playerTwoMoveTwoValue)
            return 'Player One';
          else if(playerOneMoveTwoValue < playerTwoMoveTwoValue)
            return 'Player Two';
          else 
            return 'Tie';
        } else if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors')
            return 'Player One';
          else if(playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock')
            return 'Player One';
          else if(playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper')
            return 'Player One';
          else
            return 'Player Two';
      case 3:
        if(!playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveThreeType || 
          !playerTwoMoveThreeValue) 
          return null;
        if(playerOneMoveThreeType === playerTwoMoveThreeType) {
          if(playerOneMoveThreeValue > playerTwoMoveThreeValue)
            return 'Player One';
          else if(playerOneMoveThreeValue < playerTwoMoveThreeValue)
            return 'Player Two';
          else 
            return 'Tie';
        } else if(playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors')
            return 'Player One';
          else if(playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock')
            return 'Player One';
          else if(playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper')
            return 'Player One';
          else
            return 'Player Two';
      default:
        return null;
    }
}

function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }

  let p1wins = 0;
  let p2wins = 0;
  let winner = '';

  for(let i = 1; i < 4; i++) {
    winner = getRoundWinner(i);
    if(winner === 'Tie')
      break;
    winner === 'Player One' ? p1wins++ : p2wins++;
  }

  if(p1wins === p2wins) 
    return 'Tie';
  return p1wins > p2wins ? 'Player One' : 'Player Two';
}

function setComputerMoves() {
  let randType = Math.floor(Math.random() * 3);
  playerTwoMoveOneType = mTypes[randType];
  playerTwoMoveTwoType = mTypes[randType];
  playerTwoMoveThreeType = mTypes[randType];

  let randValue = 99;
  let turnCount = 1;
  while(randValue > 0 && turnCount < 4) {
    switch(turnCount) {
      case 1:
        playerTwoMoveOneValue = Math.floor(Math.random() * randValue) - 1;
        randValue -= playerTwoMoveOneValue;
        break;
      case 2:
        playerTwoMoveTwoValue = Math.floor(Math.random() * randValue) - 1;
        randValue -= playerTwoMoveTwoValue;
        break;
      case 3:
        playerTwoMoveThreeValue = randValue;
        randValue -= playerTwoMoveThreeValue;
    }
    turnCount++;
  }
 }











