const {Router} = require('express')
const {getCustomersByID, postCustomer,getAllCustomer} = require('../controller/customerController')
const {addCars, getAllCars} = require('../controller/carsController')


const customerRouter = new Router()

customerRouter.get('/',getAllCustomer)
customerRouter.get('/:customerId',getCustomersByID)
customerRouter.post('/',postCustomer)

customerRouter.post('/:customerId/cars',addCars)
customerRouter.get('/:customerId/cars',getAllCars)

module.exports = customerRouter