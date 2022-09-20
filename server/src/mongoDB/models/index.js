const mongoose = require('mongoose')
const db = require('../index')

const { Schema } = mongoose

const userSchema = new Schema({

    email: { type: String, required: true },
    name: { type: String, required: true },
    LevelOne : String,
    LevelTwo : String,
})

const user = db.model('user', userSchema)

module.exports = user