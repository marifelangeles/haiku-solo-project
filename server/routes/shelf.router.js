const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryText = `SELECT "item"."description", "item"."image_url", "item"."id", "user"."id" as "user_id" FROM "item" JOIN "user" ON "user"."id" = "item"."user_id";`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing get shelf query', err);
            res.sendStatus(500);
        });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const updatedshelf = req.body;
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`
    const queryValues = [updatedshelf.description,
        updatedshelf.image_url, updatedshelf.user_id]
        pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
        console.log('Error completing POST shelf query', err);
        res.sendStatus(500);
    });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/', (req, res) => {
    console.log(req.body.id);
    pool.query(`DELETE FROM "item"
    WHERE "id" = $1;`, [req.body.id]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Delete error:', error)
    });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;