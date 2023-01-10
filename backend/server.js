require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')

const PORT = process.env.PORT || 8080
const MONG_URI = process.env.MONG_URI

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/tasks', taskRoutes)

// connect to db
mongoose.connect(MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(PORT, () => {
            console.log(`connected to db & listening on port ${PORT}!!`)
        })
    })
    .catch(error => {
        console.log(error)
    })



