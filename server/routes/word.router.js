require('dotenv').config();
// const axios = require('axios');
const unirest = require('unirest');

const express = require('express');
const router = express.Router();


// https://stackoverflow.com/questions/52561002/make-unirest-get-request-with-node-js-express
router.get('/', async (req, res) => {
    console.log('in get /word');
    for (let i = 0; i < 1000; i++) {
        const response = await unirest.get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
            .header("X-RapidAPI-Key", process.env.WORDS_API_KEY)
        console.log('response from api:', response.body);
        // get random word only if definition exists --> definition needed for MVP
        const wordResults = response.body.results;
        if (wordResults && wordResults[0] && wordResults[0].definition) {
            res.send(response.body);
            break;
        }
    }
});






module.exports = router;