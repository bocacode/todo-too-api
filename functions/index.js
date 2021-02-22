const functions = require("firebase-functions")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getTasks, postTask, patchTask, deleteTask} = require('./src/tasks')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/tasks/:userId', getTasks)
app.post('/tasks/:userId', postTask)
app.patch('/tasks/:userId/:taskId', patchTask)
app.delete('/tasks/:userId/:taskId', deleteTask)

exports.app = functions.https.onRequest(app)