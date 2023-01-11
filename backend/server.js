require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')
const functions = require('firebase-functions')

const PORT = process.env.PORT || 4000
const MONG_URI = process.env.MONG_URI

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/tasks', taskRoutes)

// connect to db
mongoose.connect(MONG_URI)

// localhost server
/*
    .then(() => {
        console.log("Database connected!")
        app.listen(PORT, () => {
            console.log(`connected to db & listening on port ${PORT}!!`)
        })
    })
    .catch(error => {
        console.log(error)
    })
*/

// firebase serverless api
exports.api = functions.https.onRequest(app)

