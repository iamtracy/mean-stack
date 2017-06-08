var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/user');

var schema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//mongoose hooke that fires after each post method on the [Message messages] object
//every message has a user by id, get this user and delete the corresponding
//message on the user messages array. ie sync db message deletion w/ users array
schema.post('remove', function(message) {
  User.findById(message.user, function(err, user) {
    user.messages.pull(message);
    user.save();
  });
});

//Message is the collection name => messages
module.exports = mongoose.model('Message', schema);