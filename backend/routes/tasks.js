const express = require('express')
const Task = require('../models/taskModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all tasks'})
})

// GET a single task
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single task'})
})

// POST a new task
router.post('/', async (req, res) => {
    const {title} = req.body
    
    try {
        const task = await Task.create({title})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({error : error.message})
    }
})

// DELETE a new task
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELELTE a new task'})
})

// UPDATE a new task
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new task'})
})

module.exports = router