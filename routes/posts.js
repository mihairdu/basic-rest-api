const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello, posts!");
});

router.get('/specific', (req, res) => {
    res.send("Hello, specific post!");
});


module.exports = router;