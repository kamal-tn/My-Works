const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 25
  },

  mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10
  },

  designation: {
    type: String,
  }
})

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const employeeModel = mongoose.model('details', employeeSchema)

module.exports = employeeModel