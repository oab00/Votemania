var express = require('express');
var controller = require('./poll.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.post('/me', controller.me);
router.post('/', controller.create);
// TODO: make a delete function

module.exports = router;