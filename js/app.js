/**
 * OOP Game App
 * app.js
 */

 /**
  * Create an array of phrases for the game. Phrases should a string that only includes letters and spaces, no numbers or special characters.
  */
 const phrases = [
        'broken crayons still color',
        'it does not matter where you start it matters where you finish',
        'if you lack optimism it is game over',
        'die on your own sword',
        'kindness always wins',
        'if you are good enough no one can stop you',
        'your lack of patience is killing you'
    ];

/**
 * Start game by calling startGame method and event listener on button
 */
let game = null;
// Add bounce animation
$('#btn__reset').addClass('animated tada');
$('#btn__reset').on('click',(event)=>{
    game = new Game(0,phrases,null);
    game.startGame();
  });

 /**
  * Variable for buttons on board and event listener(click) for the handleInteraction method from Game
  */
 const buttons = document.querySelectorAll('button');

 for (let i = 0; i < buttons.length; i++) {
     let buttonPress = buttons[i];
     buttonPress.addEventListener('click', function(event) {
        game.handleInteraction(event.target);
     });
 }

 /**
  * Event listener so user can answer game using keyboard
  */
 $('body').on('keypress', (event) => {
     let keyPress = event.keyPress;
     let letter = String.fromCharCode(keyPress).toLowerCase();
     let button = $(`button.key:contains('${letter}')`);
     game.handleInteraction(button.get(0));
 });


