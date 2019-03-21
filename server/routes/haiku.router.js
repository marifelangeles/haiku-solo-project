const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of a user's saved haikus
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
 * Add an item for the logged in user to the shelf
 */
// router.post('/', (req, res) => {
//     const updatedshelf = req.body;
//     const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`
//     const queryValues = [updatedshelf.description,
//     updatedshelf.image_url, updatedshelf.user_id]
//     pool.query(queryText, queryValues)
//         .then(() => { res.sendStatus(200); })
//         .catch((err) => {
//             console.log('Error completing POST shelf query', err);
//             res.sendStatus(500);
//         });
// });



module.exports = router;