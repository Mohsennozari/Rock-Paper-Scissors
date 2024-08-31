// Variables
let userScore = 0;
let computerScore = 0;
let round = 0;
const historyList = document.getElementById('history-list');

// Function to play the game
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Update computer choice image
    document.getElementById('computer-choice-image').src = `/assets/jjjjj.jpg`;

    // Determine the result
    let result;
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    // Update the result and scores
    document.getElementById('result').innerText = result;
    document.getElementById('user-score').innerText = `User: ${userScore}`;
    document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
    document.getElementById('round').innerText = `Round: ${++round}`;

    // Add the result to history
    addToHistory(userChoice, computerChoice, result);
}

// Function to add game result to history
function addToHistory(userChoice, computerChoice, result) {
    const listItem = document.createElement('li');
    listItem.innerText = `Round ${round}: You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    historyList.appendChild(listItem);
}

// Function to clear game history
function clearHistory() {
    historyList.innerHTML = '';
}

// Function to save game history (for demonstration, just log to console)
function saveHistory() {
    const historyItems = historyList.querySelectorAll('li');
    const historyArray = Array.from(historyItems).map(item => item.innerText);
    console.log('Game History:', historyArray.join('\n'));
}
