const functions = require("firebase-functions")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getTasks, postTask, patchTask, deleteTask} = require('./src/tasks')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/tasks', getTasks)
app.post('/tasks', postTask)
app.patch('/tasks/:taskId', patchTask)
app.delete('/tasks/:taskId', deleteTask)

exports.app = functions.https.onRequest(app)