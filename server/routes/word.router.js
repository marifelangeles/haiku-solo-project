require('dotenv').config();
// const axios = require('axios');
const unirest = require('unirest');

const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    console.log('in get /word');
    // get random word only if definition exists --> definition needed for MVP
    // for loop to avoid infinite loop searching for word with definition
    for (let i = 0; i < 1000; i++) {
        const response = await unirest.get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
            .header("X-RapidAPI-Key", process.env.WORDS_API_KEY)
        console.log('response from api:', response.body);
        const wordResults = response.body.results;
        // get the first definition available in results
        if (wordResults && wordResults[0] && wordResults[0].definition) {
            res.send(response.body);
            break;
        }
    }
});

module.exports = router;