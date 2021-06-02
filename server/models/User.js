const mongoose = require('mongoose')
const schema = mongoose.Schema


const userSchema = new schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    max: 12,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    max: 32,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 32,
    trim: true
  }
})

module.exports = mongoose.model('User', userSchema)