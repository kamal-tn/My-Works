const { Router } = require("express")
const todoRouter = new Router();
const {getallTask,getTaskbyID,addTask,editTask,deleteTask} = require('../controller/todocontroller')

todoRouter.get('/',getallTask)
todoRouter.get('/:taskid',getTaskbyID)
todoRouter.post('/',addTask)
todoRouter.put('/:taskid',editTask)
todoRouter.delete('/:taskid',deleteTask);

module.exports = todoRouter;