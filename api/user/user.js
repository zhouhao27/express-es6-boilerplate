import mongoose from 'mongoose'
import validator from 'validator'

/**
 * @swagger
 * definitions:
 *  User:
 *    type: "object"
 *    properties:
 *      name: 
 *        type: "string"
 *      email:
 *        type: "string"
 *        format: email
 *      password:
 *        type: "string"
 *      passwordConfirm:
 *        type: "string"
 */ 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
})

export default mongoose.model('User', userSchema)