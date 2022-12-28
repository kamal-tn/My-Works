const customerModel = require('../model/customermodel')

const getCustomersByID = async(req, res) => {

    const {customerId} = req.params //{ movieID: '639b4bfaf5b417f9399c0f3e' }
  
    try {
      const customer = await customerModel.findById(customerId).populate('cars', { model: 1, price: 1, _id: 0 })
      if(customer) {
        res.status(200).send({status: 'success', customer})
      } else {
        res.status(404).send({status: 'error', msg: "customer Not found"})
      }
    } catch (error) {
      console.log("Error fetching customer from DB")
      res.status(500).send({status: 'error', msg: "Error fetching customer from DB"})
    }
  }

  const postCustomer = async (req, res) => {

    const customerData = req.body
  
    //Validations
    try {
      const data = await customerModel.create(customerData)
      console.log(data)
      res.status(201).send({status: 'succes', msg: 'customer Inserted successfully', customer: data})
    } catch (error) {
      console.log("Error inserting customer in DB")
      res.status(500).send({status: 'error', msg: "Error inserting customer in DB", error})
    }
  }

  const getAllCustomer = async (req,res) => {
    
    try {
        const customers = await customerModel.find().populate('cars', { model: 1, price: 1, _id: 0 })
        res.status(200).send({status:"success",customers})
    } catch (error) {
        res.status(500).send({status: 'error', msg: "Error fetching customers from DB"})
    }
  }

  module.exports = {
    getCustomersByID,
    postCustomer,
    getAllCustomer
  }