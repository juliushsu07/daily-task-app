const Task = require('../models/taskModel')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

// GET all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1 }) // new tasks on top

    res.status(200).json(tasks)
}

// GET a single task
const getTask = async ( req, res ) => {
    const { id } = req.params
    console.log(id)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task!'})
    }

    const task = await Task.findById(id)

    if(!task) {
        return res.status(404).json({error: 'No such task!'})
    }
    
    res.status(200).json(task)
}

// CREATE a new task
const createTask = async (req, res) => {
    const {title} = req.body

    // add doc to db
    try {
        const task = await Task.create({title})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask
}