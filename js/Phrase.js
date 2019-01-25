/* 
 * OOP Game App
 * Phrase.js
 */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display the phrase board on screen
     */
    addPhraseToDisplay() {
        let gameBoardPhrase = [...this.phrase];

        gameBoardPhrase.forEach(function(e) {
            let $li;
            if(e === ' ') {
                $li = $('<li>').addClass('space');
            } else {
                $li = $('<li>').addClass('letter');
            }
            $li.text(e);
            $('#phrase ul').append($li);
        });
    }

    /**
     * Checks to see if selected letter is in phrase on game board.
     * @param {string} letterSelected - Letter to check for
     */
    checkLetter(selectedLetter) {
        let isMatched = false;
        let letter = selectedLetter.textContent;
        $('#phrase ul li.letter').each((index, value) => {
            let $value = $(value);
            if(letter === $value.text()) {
                isMatched = true;
            }
        });
        return isMatched;
    }

    /**
     * If letter matches it is added to board with animation
     */
    showMatchedLetter(letterMatch) {
        let letter = $(letterMatch).text();
        let letterFromPhrase = $(`#phrase ul li.letter:contains('${letter}')`);
        letterFromPhrase.addClass('show animated flash');
    }
 }