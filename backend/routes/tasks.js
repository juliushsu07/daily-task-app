const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all tasks'})
})

// GET a single task
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single task'})
})

// POST a new task
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new task'})
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