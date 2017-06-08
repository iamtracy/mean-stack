var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v);
      },
      message: 'Password format is invalid. It must contain more than 8 characters, one lowercase letter, one uppercase letter, and one number'
    }
  },
  email: { type: String, required: true, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

schema.plugin(mongooseUniqueValidator);

//User is the collection name => users
module.exports = mongoose.model('User', schema);