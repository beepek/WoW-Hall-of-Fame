var express = require('express');
var router = express.Router();
const worldFirstController = require('../controllers/worldfirst');
const isLoggedIn = require('../config/auth')
/* GET users listing. */
router.get('/', worldFirstController.index);
router.get('/new', worldFirstController.new);

router.get('/:id', worldFirstController.show);
router.post('/', worldFirstController.create);

module.exports = router;