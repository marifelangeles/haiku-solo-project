const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of a user's saved haikus from database
 */
router.get('/', (req, res) => {
    const queryText = `SELECT 
                        "haiku"."id", 
                        "haiku"."word", 
                        "haiku"."line1",
                        "haiku"."line2",
                        "haiku"."line3",
                        "haiku"."date",
                        "haiku"."user_id"
                        FROM "haiku"
                        JOIN "user" ON "user"."id" = "haiku"."user_id";`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error with get haikus', err);
            res.sendStatus(500);
        });
});


/**
 * Save a haiku for the logged in user
 */
router.post('/', (req, res) => {
    const updatedHaiku = req.body;
    const queryText = `INSERT INTO "haiku" ("word", "line1", "line2", "line3", "user_id" ) 
                    VALUES ($1, $2, $3, $4, $5);`
    const queryValues = [
        updatedHaiku.word,
        updatedHaiku.line1, 
        updatedHaiku.line2,
        updatedHaiku.line3,
        updatedHaiku.id,]
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error completing POST haiku query', error);
            res.sendStatus(500);
        });
});

/**
 * Delete a haiku for the logged in user
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "haiku"
                    WHERE "haiku"."id" = $1;`
    const queryValues = [req.params.id]
    pool.query(queryText, queryValues)
        .then(() => { 
            console.log('back from delete haiku');
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.log('Error with delete request', error);
            res.sendStatus(500);
        });
});

module.exports = router;