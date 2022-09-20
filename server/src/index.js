const { json } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index')

app.use(json())
app.use(cors())

app.use('/',router)

app.listen(3333,()=> {
    console.log("Server is running")
})