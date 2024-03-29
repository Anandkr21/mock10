const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

require("dotenv").config()

const { User } = require("../model/userModel")
const { authenticate } = require("../middleware/authentication")



const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            res.status(409).send("Already registered")
        }
        else {
            const hashed_password = bcrypt.hashSync(password, 6)
            const user = new User({ name, email, password: hashed_password })
            await user.save()
            return res.status(201).send({ message: "Registered successfully" })
        }
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            let hashed_password = user.password
            bcrypt.compare(password, hashed_password, async (err, result) => {
                if (err) {
                    return res.status(401).send({ message: "Wrong Credientials" })
                }
                else if (result) {
                    var token = jwt.sign({ id: user._id, name: user.name }, process.env.secret_key)
                    res.status(201).send({ message: "Login Successfull", token, user })
                } else {
                    return res.status(401).send({ message: "Wrong Credientials" })
                }
            })
        }
    }
    catch (err) {
        return res.status(404).send({ message: err.message })
    }
})



module.exports = { userRouter }