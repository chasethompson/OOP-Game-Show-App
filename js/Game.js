/** 
 * OOP Game App
 * Game.js 
 */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates the phrases used in the game
     * @return {array} An array of all phrases used for game, to be chosen randomly later
     */
    createPhrases() {
        let phrases =[{
            phrase: 'sometimes i have believed as many as six impossible things before breakfast',
            },
            {
            phrase: 'unless someone like you cares a whole awful lot, nothing is going to get better it is not.',
            },
            {
            phrase: 'it is our choices that show what we truly are far more than our abilities',
            },
            {
            phrase: 'if it is on the internet it must be true'
            },
            {
            phrase: 'the game is afoot'
            }];
            return phrases;
        }
    /**
     * Randomly select a phrase for the player to guess.
     * @return {Object} Phrase is chosen
     */
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase].phrase;
    }
    /**
     * Starts the game and displays a randomly selected phrases from getRandomPhrase
     */
    startGame(){
        let selectedPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(selectedPhrase);
        this.activePhrase.addPhraseToPage();
        document.getElementById('overlay').style.display = 'none';
    }
    
    }