const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('ROTA ARTIGOS');
});

module.exports = router;