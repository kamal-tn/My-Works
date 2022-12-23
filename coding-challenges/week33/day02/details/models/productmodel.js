const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const productSchema = new Schema({
  product: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 25
  },

  price: {
    type: String
  }
})

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const productModel = mongoose.model('product', productSchema)

module.exports = productModel;