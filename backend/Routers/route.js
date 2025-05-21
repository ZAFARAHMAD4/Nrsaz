const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from example route');
});

module.exports = router;
