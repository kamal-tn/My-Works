const employeeModel = require('../models/employeeModel')

const getEmployee = async (req, res) => {

  const {name} = req.query 

  try {
    const employee = await employeeModel.find(name)
    res.status(200).send({status: 'success', employee})
  } catch (error) {
    console.log("Error fetching employee from DB")
    res.status(500).send({status: 'error', msg: "Error fetching employee from DB"})
  }
}

const getEmployeeByID = async(req, res) => {

  const {employeeID} = req.params 

  try {
    const employee = await employeeModel.findById(employeeID)
    if(employee) {
      res.status(200).send({status: 'success', employee})
    } else {
      res.status(404).send({status: 'error', msg: "Employee Not found"})
    }
  } catch (error) {
    console.log("Error fetching employee from DB")
    res.status(500).send({status: 'error', msg: "Error fetching employee from DB"})
  }
}

const postEmployee = async (req, res) => {

  const employeeData = req.body

  //Validations
  try {
    const data = await employeeModel.create(employeeData)
    console.log(data)
    res.status(201).send({status: 'succes', msg: 'employee Inserted successfully'})
  } catch (error) {
    console.log("Error inserting employee in DB")
    res.status(500).send({status: 'error', msg: "Error inserting employee in DB", error})
  }
}

const updateEmployeeById = async (req, res) => {
  const {employeeID} = req.params 
  const updatedEmployeeData = req.body

  try {
    const updatedEmployee = await employeeModel.findByIdAndUpdate(employeeID, updatedEmployeeData)
    res.status(201).send({status: 'succes', msg: 'Employee updated successfully'})
  } catch (error) {
    console.log("Error updating employee in DB")
    res.status(500).send({status: 'error', msg: "Error updating employee in DB", error})
  }
}


const deleteEmployeeByID = async(req, res) => {
  const {employeeID} = req.params 
  try {
    await employeeModel.findByIdAndDelete(employeeID)
    res.status(201).send({status: 'succes', msg: 'Employee deleted successfully'})
  } catch (error) {
    console.log("Error deleting employee in DB")
    res.status(500).send({status: 'error', msg: "Error deleting employee in DB"})
  }
}

module.exports = {
  getEmployee,
  getEmployeeByID,
  postEmployee,
  updateEmployeeById,
  deleteEmployeeByID
}