const express = require('express');

const router = express.Router();

router.post('/api/log', (req, res) => {
 console.log("Message Received")
});

module.exports = router;
