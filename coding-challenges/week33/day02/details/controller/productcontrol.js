const productModel = require('../models/productmodel')

const postProduct = async (req, res) => {

    const productData = req.body
  
    //Validations
    try {
      const data = await productModel.create(productData)
      console.log(data)
      res.status(201).send({status: 'succes', msg: 'product Inserted successfully'})
    } catch (error) {
      console.log("Error inserting product in DB")
      res.status(500).send({status: 'error', msg: "Error inserting product in DB", error})
    }
  }

  module.exports = { postProduct };