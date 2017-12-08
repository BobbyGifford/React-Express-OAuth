const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  message: String,
  displayName: String,
  datePosted: Date
})

mongoose.model('messages', userSchema);
