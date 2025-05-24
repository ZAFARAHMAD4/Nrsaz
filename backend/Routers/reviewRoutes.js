// backend/Routers/reviewRoutes.js

const express = require('express');
const router = express.Router();
const { addReview, getReviews } = require('../Controllers/reviewController');

router.post('/reviews', addReview);
router.get('/reviews', getReviews);

module.exports = router;
