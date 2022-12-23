const { Router } = require('express')
const { deleteEmployeeByID, getEmployee, getEmployeeByID, postEmployee, updateEmployeeById } = require('../controllers/employeeController')

const employeeRouter = new Router();


employeeRouter.get('/employee', getEmployee)
employeeRouter.get('/:employeeID', getEmployeeByID)


employeeRouter.post('/employee', postEmployee)
employeeRouter.put('/:employeeID', updateEmployeeById)
employeeRouter.delete('/:employeeID', deleteEmployeeByID)

module.exports = employeeRouter