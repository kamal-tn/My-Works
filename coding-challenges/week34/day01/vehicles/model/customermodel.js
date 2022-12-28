const mongoose  = require('mongoose')
const {Schema} = require('mongoose')


const customerSchema = new Schema ({
    customer : String,
    cars : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'cars'
    }]
})

const customerModel = mongoose.model('customers',customerSchema)

module.exports = customerModel