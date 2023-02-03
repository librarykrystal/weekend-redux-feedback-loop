const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('ROUTER.POST');
    const newFeedback = req.body;
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [newFeedback.feelingIn, newFeedback.understandingIn, newFeedback.supportIn, newFeedback.commentsIn])
    .then((result) => {
        console.log('result', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error making insert query:', error);
        res.sendStatus(500); // 500s are server probs
    })
});


module.exports = router;