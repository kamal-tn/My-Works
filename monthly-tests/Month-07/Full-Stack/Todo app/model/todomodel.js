const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const todoSchema = new Schema ({
    task: String,
    postedon: {
        type: Date,
        default: Date.now()
    }
})

const todomodel = mongoose.model ("tasks",todoSchema)

module.exports = todomodel;