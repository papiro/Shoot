const moves = {
  PAPER: {
    ROCK: 1,
    PAPER: -1,
    SCISSORS: 0
  },
  SCISSORS: {
    PAPER: 1,
    SCISSORS: -1,
    ROCK: 0
  },
  ROCK: {
    SCISSORS: 1,
    ROCK: -1,
    PAPER: 0
  }
};

const counter = function() { document.getElementById('counter').innerHTML = '0';
};

const addone = function () {  
  const counter = document.getElementById('counter').innerHTML;
  const wins = parseInt(counter, 10) + 1;
  const newwins = document.getElementById('counter').innerHTML = wins;
};

function playRobot () {
  ['rock', 'scissors', 'paper'].forEach(function(item) {
    const elem = document.getElementById(item);
    elem.addEventListener('click', function(event) {
      const userMove = item.toUpperCase();
      const robotMove = getRobotMove();
      const outcome = moves[userMove][robotMove];

      switch (outcome) {
        case 0:
          console.log(`YOU LOSE:::${userMove} vs ${robotMove}`);
          counter();
          break;
        case 1:
          console.log(`YOU WIN:::${userMove} vs ${robotMove}`);
          addone();
          break;
        case -1:
          console.log(`TIE:::${userMove} vs ${robotMove}`);
          break;
        default:
          console.log('something is gravely wrong');
          break;
      }
    });
  });
}

// return "PAPER", "SCISSORS", or "ROCK"- randomly
function getRobotMove () {
  return Object.keys(moves)[Math.floor(Math.random()*3)];
}

function playHuman () {

}

switch(window.location.search.split('=')[1]) {
  case 'robot':
    playRobot();
    break;
  case 'human':
    playHuman();
    // do something else with human
    break;
  default:
    console.error('Invalid query parameter:::' + window.location.search);
    break;
}


