const todomodel = require('../model/todomodel');

const getallTask = async (req,res) => {
    try {
        const task = await todomodel.find(task)
        res.send({status: 'success',task})
    } catch (error) {
        console.log ("Error fetching task from db")
        res.status(500).send({status:'error',msg:'Error fetching task from db'})
    }
}

const getTaskbyID = async (req,res) => {
    const {taskid} = req.params;
    try {
        const task = await todomodel.findById(taskid)
        res.send({status:'success',task})
    } catch (error) {
        console.log ("Error fetching task from db")
        res.status(500).send({status:'error',msg:'Error fetching task from db'})
    }
}

const addTask = async (req,res) => {
    const {task} = req.body
    try {
        const todo = await todomodel.create(task)
        res.send({status:"success",todo})
    } catch (error) {
        console.log ("Error adding task to db")
        res.status(500).send({status:'error',msg:'Error addind task to db'})
    }
}

const editTask = async (req,res) => {
    const {taskid} = req.params
    const updatedTask = req.body
    try {
        const edited = await todomodel.findByIdAndUpdate(updatedTask)
        res.send({status:"success",edited})
    } catch (error) {
        console.log ("Error updating task in db")
        res.status(500).send({status:'error',msg:'Error updating task in db'})
    }
}

const deleteTask = async (req,res) => {
    const {taskid} = req.params
    try {
        await todomodel.findByIdAndDelete(taskid)
        res.send({status:"success",msg:"Task Deleted Successfully"})
    } catch (error) {
        console.log ("Error deleting task from db")
        res.status(500).send({status:'error',msg:'Error deleting task from db'})
    }
}

module.exports = {
    getTaskbyID,
    getallTask,
    editTask,
    addTask,
    deleteTask
}