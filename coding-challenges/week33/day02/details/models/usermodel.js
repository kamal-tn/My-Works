const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 25
  },

  email: {
    type: String
  }
})

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const userModel = mongoose.model('user', userSchema)

module.exports = userModel;