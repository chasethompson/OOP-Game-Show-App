/** 
 * OOP Game App
 * Game.js 
 */

class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }

    /**
     * Starts the game and displays a randomly selected phrases from getRandomPhrase
     */
    startGame(){
        //let selectedPhrase = this.getRandomPhrase();
        $('#overlay h1').remove();
		 $('#overlay').css('display','none');
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
        let arr = this.phrases;
        let total = arr.length;
        let randomPhrase = Math.floor(Math.random() * total);
        return this.phrases[randomPhrase];
    }

    handleInteraction(buttonClicked) {
        // Disable selected letter on the game board
        $(buttonClicked).addClass('chosen animated tada key');
        $(buttonClicked).prop('disabled', true);

        // Check if letter clicked is in phrase
        let letterCheck = this.activePhrase.checkLetter(buttonClicked);
        if (letterCheck === false) {
            // Wrong letter removes heart
            this.removeLife();
        } else {
            // Correct letter shows up on game board
            this.activePhrase.showMatchedLetter(buttonClicked);
        }
        // Check to see if player won on last entry
        this.checkForWin();
    }

    /**
     * Remove life function, hides heart.
     */ 
    removeLife() {
        this.missed += 1;
        $(`#scoreboard ol li:nth-of-type(${this.missed})`).css('display', 'none');
    }

    /**
     * Check to see if player has won game. Checks for completed phrase, also checks for remaining hearts
     */
    checkForWin() {
        let letterClass = $('#phrase ul li.letter').length;
        let showClass = $('#phrase ul li.show').length;
        if(letterClass === showClass) {
            this.gameOver(true);
        }
        if(this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Declare if game has been won or lost.
     */
    gameOver(win){
        this.resetGame();
        if(win) {
            $('#overlay').css('display', 'flex');
            $('#overlay').addClass('win');
            $('#overlay h2').after($('<h1>The winner is you!</h1>'))
        } else {
            $('#overlay').css('display', 'flex');
            $('#overlay').addClass('lose');
            $('#overlay h2').after($('<h1>If at first you don\'t succeed...'))
        }

        // Reload the Start Game button and display win/lose message
        setTimeout(function() {
            $('#btn__reset').removeClass('animated tada');
            $('#btn__reset').addClass('animated tada');
        }, 2500);

        setTimeout(function() {
            $('#overlay h1').removeClass('animated heartBeat');
            $('#overlay h1').addClass('animated heartBeat');
        }, 500);
    }

    resetGame() {
        this.missed = 0;
        $('#phrase ul').empty();
        $('#qwerty .keyrow button').removeClass('chosen animated tada key');
        $('#qwerty .keyrow button').addClass('key');
        $('#qwerty .keyrow button').attr('disabled', false);
        $('#scorebaord ol li').css('display', '');
    }
}