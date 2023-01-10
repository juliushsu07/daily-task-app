const express = require('express')
const {
    getTasks,
    getTask,
    createTask
} = require('../controllers/taskController') 

const router = express.Router()

router.get('/', getTasks)

// GET a single task
router.get('/:id', getTask)

// POST a new task
router.post('/', createTask)

// DELETE a new task
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELELTE a new task'})
})

// UPDATE a new task
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new task'})
})

module.exports = router