require('dotenv').config();
const express = require('express');
const router = express.Router();
// api uses unirest, instead of axios
const unirest = require('unirest');


// count number of syllables of incoming word from Word API
new_count = (word) => {
    if (word) {
        word = word.toLowerCase();
        if (word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        return word.match(/[aeiouy]{1,2}/g).length;
    }
    return 0;
}


// determine if number of syllables are within haiku limit (7)
isSyllableLimit = (word) => {
    // console.log('in isSyllableLimit', word);
    if (new_count(word) <= 7) {
        return true;
    } else {
        return false;
    }
}

// determine if word doesn't include a number
isNotNumber = (word) => {
    // console.log('in isNotNumber', word);
    var num = /[0-9]/g;
    var n = word.search(num);
    // console.log('result line 41', n);
    if (n === -1) {
        return true;
    } else {
        return false;
    }
}

// filter random words from Word API (must include a definition, be <= 7 syllables, and not a number)
router.get('/', async (req, res) => {
    console.log('in get /word');
    // for loop to avoid infinite loop searching 
    for (let i = 0; i < 1000; i++) {
        const response = await unirest.get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
            .header("X-RapidAPI-Key", process.env.WORDS_API_KEY)
        console.log('response from api:', response.body);
        // definition is a property of results.  Word API may not provide a definition 
        const wordResults = response.body.results;

        console.log('word line 57', response.body.word);
        const word = response.body.word;
        console.log('count word syllales line 59', new_count(word));
        console.log('isSyllableLimit line 60', isSyllableLimit(word));
        console.log('isNotNumber line 61', isNotNumber(word));

        // accept a random word if...
        // includes a definition, is not more than 7 syllables, is not a number
        if (wordResults && wordResults[0] && 
            wordResults[0].definition && 
            isSyllableLimit(word) && 
            isNotNumber(word)) {
                res.send(response.body);
                break;
        }
    }
});

module.exports = router;