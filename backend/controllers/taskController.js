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

// Delete a task
const deleteTask = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndDelete({_id : id})

    if(!task) {
        return res.status(404).json({error: 'No such task!'})
    }

    res.status(200).json(task)
}

// update a task
const updateTask = async (req, res) => {
    const { id } = req.params
    console.log(id)
    console.log(req.body)
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task!'})
    }

    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!task) {
        return res.status(404).json({error: 'No such task!'})
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}