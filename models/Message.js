const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  message: String,
  displayName: String,
  datePosted: Date,
  googleId: String
})

mongoose.model('messages', userSchema);
