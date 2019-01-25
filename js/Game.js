/** 
 * OOP Game App
 * Game.js 
 */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }

    // Starts the game by first resetting the game and then displays a randomly selected phrases from getRandomPhrase
    startGame(){
        $('#overlay h1').remove();
        $('#overlay').css('display', 'none');
        $('#overlay').removeClass('win lose');

        this.resetGame();

        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Randomly select a phrase for the player to guess.
     * @return {Object} Phrase is chosen
     */
    getRandomPhrase() {
        let phraseArray = this.phrases;
        let randomIndex = Math.floor(Math.random() * phraseArray.length);
        return this.phrases[randomIndex];
    }
    
    // Handles the log for buttons pressed or clicked
    handleInteraction(button) {

        let letter = this.activePhrase.checkLetter(button);
        if(letter === false){
            $(button).addClass('wrong');
            this.removeLife();
            $(button).prop('disabled', true);
        } else {
            $(button).addClass('chosen animated pulse key');
            $(button).prop('disabled', true);
            this.activePhrase.showMatchedLetter(button);
        }

        this.checkForWin();
    }

    // When wrong letter is selected fires and hides a heart.
    removeLife() {
        this.missed += 1;
        $(`#scoreboard ol li:nth-of-type(${this.missed})`).css('display', 'none');
    }

    // Check to see if player has won or not. Do all chosen letters match the correct letters, and does if player still have hearts.
    checkForWin() {
        let classLetter = $('#phrase ul li.letter').length;
        let classShow = $('#phrase ul li.show').length;
        if(classLetter === classShow) {
            this.gameOver(true);
        }
        if(this.missed >= 5) {
            this.gameOver(false);
        }
    }
    
    // Declare if game has been won or lost.
    gameOver(win) {
        this.resetGame();
        // Reload the Start Game button and display win/lose message
        if(win) {
            $('#overlay').css('display', 'flex');
            $('#overlay').addClass('win');
            $('#overlay h2').after($('<h1>You win! Want to play again?</h1>'));
        } else {
            $('#overlay').css('display', 'flex');
            $('#overlay').addClass('lose');
            $('#overlay h2').after($('<h1>If at first you don\'t succeed\...</h1>'));
        }

        setTimeout(function () {
            $('#btn__reset').removeClass('animated tada');
            $('#btn__reset').addClass('animated tada');
        }, 1500);
    }

    // Reset the game board
    resetGame() {
        this.missed = 0;
        $('#phrase ul').empty();
        $('#qwerty .keyrow button').removeClass('chosen animated pulse key');
        $('#qwerty .keyrow button').removeClass('wrong');
		$('#qwerty .keyrow button').addClass('key');
		$('#qwerty .keyrow button').prop('disabled',false);
		$('#scoreboard ol li').css('display','');
    }
 }