const userModel = require('../models/usermodel')

const postUser = async (req, res) => {

    const userData = req.body
  
    //Validations
    try {
      const data = await userModel.create(userData)
      console.log(data)
      res.status(201).send({status: 'succes', msg: 'user Inserted successfully'})
    } catch (error) {
      console.log("Error inserting employee in DB")
      res.status(500).send({status: 'error', msg: "Error inserting user in DB", error})
    }
  }

  module.exports = {postUser}