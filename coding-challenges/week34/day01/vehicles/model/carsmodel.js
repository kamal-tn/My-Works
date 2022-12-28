const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const carsSchema = new Schema ({
    model : String,
    price: Number,
    customerId : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : "customers"
    }]
})

const carsModel = mongoose.model ('cars', carsSchema)

module.exports = carsModel