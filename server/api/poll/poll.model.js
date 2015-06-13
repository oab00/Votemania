var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
	username: String,
	question: String,
	items: Array
});

module.exports = mongoose.model('Poll', PollSchema);