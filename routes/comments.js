const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.post('/worldfirst/:id/comments', commentsController.create);

module.exports = router;