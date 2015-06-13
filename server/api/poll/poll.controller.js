var Poll = require('./poll.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

/**
 * Get list of polls
 */
exports.index = function(req, res) {
  Poll.find({}, function (err, polls) {
    if(err) return res.send(500, err);
    res.json(200, polls);
  });
};

/**
 * Get my polls
 */
exports.me = function(req, res) {
  var userId = req.body.username;
  Poll.find({
    username: userId
  }, function(err, polls) {
    if (err) return res.json(422, err);
    res.json(polls);
  });
};

/**
 * Creates a new poll
 */
exports.create = function (req, res, next) {
	var newPoll = new Poll(req.body);

  newPoll.save(function(err, poll) {
  	if (err) return res.json(422, err);
  	//res.json({ message: 'Poll \'' + poll.question + '\' created.' });
  })
};