/**
 * OOP Game App
 * app.js
 */

// Create an array of phrases for the game. Phrases should a string that only includes letters and spaces, no numbers or special characters.
const phrases = [
    'just do it',
    'finish strong',
    'let it go',
    'believe in yourself',
    'kindness always wins',
    'spoiler alert',
    'never give up'
];

let game;
// Start game by calling startGame method and event listener on button
$('#btn__reset').addClass('animated tada');
$('#btn__reset').on('click', (event) => {
    $('#btn__reset').removeClass('animated tada');
    game = new Game ();
    game.startGame();
});

// Event listener for clicked letter on game board
$('#qwerty').on('click', (event) => {
    let button = event.target;
    if(button.tagName !== 'BUTTON') {
        return;
    }
    if(game === null) {
        return;
    }
    game.handleInteraction(button);
});

// Event listener for using keyboard instead of clicking
$('body').on('keypress', (event) => {
    let loggedKey = event.keyCode;
    let letter = String.fromCharCode(loggedKey).toLowerCase();
    let button = $(`button.key:contains('${letter}')`);
    game.handleInteraction(button.get(0));
    
});