const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')


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
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  }
})

// * Compare the password the user entered vs what is on file

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}


// * Vitual passwwordConfirmation submodel
userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// * Validate password, check if it has been updated and does it match the password if so?
userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Does not match')
    }
    next()
  })


// * If the above is true, save the password using bcrypt
userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

// * Run validator
userSchema.plugin(require('mongoose-unique-validator'))


module.exports = mongoose.model('User', userSchema)