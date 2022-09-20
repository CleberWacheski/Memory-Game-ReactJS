const express = require('express')
const router = express.Router()
const user = require('../mongoDB/models/index')

router.get('/', (req, res) => {
    res.status(200).send("Server is Running!!")
})

router.post('/user', async (req, res) => {
    const { name, email } = req.body

    try {
        
        const createNewUser = new user({
            name,
            email
        })

        await createNewUser.save()

        res.status(201).json(createNewUser)

    } catch (err) {
        res.status(400).send("Error :", err)
    }

})

router.get('/user', async (req, res) => {
    try {
        const allUser = await user.find()

        res.status(200).json(allUser)
    }
    catch (err) {
        res.status(400).send("Error :", err)
    }



})

router.put('/user/:id', async (req, res) => {
    const { id } = req.params
    const { records } = req.body

    try {
        const updateUser = await user.findOneAndUpdate({ _id: id }, { ...records }, {
            new: true,
            upsert: true
        })
        res.status(201).json(updateUser)
    }
    catch (err) {
        res.status(400).send("Error :", err)
    }

})



module.exports = router

