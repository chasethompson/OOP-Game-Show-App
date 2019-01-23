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
        let arr = [...this.phrase];

        arr.forEach(function(e){
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
    checkLetter(letterSelected) {
        let isMatch = false;
        let letter = letterSelected.textContent;
        
        $('#phrase ul li.letter').each((index, value) => {
            let $value = $(value);
            if(letter === $value.text()) {
                isMatch = true;
            }
        });
        return isMatch;
    }

    showMatchedLetter(matchedLetterElement){
        // $(matchedLetterElement).addClass('show');
        let letter = $(matchedLetterElement).text();
        let elementFromPhrase = $(`#phrase ul li.letter:contains('${letter}')`);
        elementFromPhrase.addClass('show animated flash');
      }
}
