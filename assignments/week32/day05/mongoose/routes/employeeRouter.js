const { Router } = require('express')
const { deleteEmployeeByID, getEmployee, getEmployeeByID, postEmployee, updateEmployeeById } = require('../controllers/employeeController')

const employeeRouter = Router()


employeeRouter.get('/', getEmployee)
employeeRouter.get('/:employeeID', getEmployeeByID)


employeeRouter.post('/', postEmployee)
employeeRouter.put('/:employeeID', updateEmployeeById)
employeeRouter.delete('/:employeeID', deleteEmployeeByID)

module.exports = employeeRouter