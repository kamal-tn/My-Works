const customerModel = require('../model/customermodel')
const carsModel = require('../model/carsmodel')

const addCars = async (req, res) => {
    const { customerId } = req.params
  
    const { model, price } = req.body
    try {
      //1)Add the review in Review Collection
      const addedCar = await carsModel.create({ model, price})
  
      //2) Get the _id of review and insert it inside Movie Document
      const customerUpdatedDoc = await customerModel.findByIdAndUpdate(customerId, {
        $push: {
          cars: addedCar._id
        }
      })
  
      res.send({ status: 'success', cars: addedCar })
  
    } catch (error) {
      res.status(500).send({ status: 'error', msg: 'Adding car was failed' })
    }
  }

  const getAllCars = async (req,res) => {
    const {customerId} = req.params

    try {
        const cars = await carsModel.find({customerId})
        res.status(200).send({ status: 'success', cars })
    } catch (error) {
        res.status(500).send({ status: 'error', msg: "Error fetching cars from DB" })
    }
  }

  module.exports = {
    getAllCars,
    addCars
  }