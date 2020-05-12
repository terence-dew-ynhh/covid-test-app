const express = require('express');

const router = express.Router();

router.post('/api/log', (req, res) => {
res.send(req.body)
});

module.exports = router;
