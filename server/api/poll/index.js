var express = require('express');
var controller = require('./poll.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.post('/me', controller.me);
router.post('/', controller.create);
router.put('/update', controller.update);
router.delete('/update/:id/:index', controller.remove);

module.exports = router;