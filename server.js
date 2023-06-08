const express = require('express');
const app = express()
app.use(express.json())
const http = require("http")
const socketio = require("socket.io")
const server = http.createServer(app)
const io = socketio(server)
const { connection } = require('./config/db');
const { userRouter } = require('./route/userRoute');
const Port = process.env.port || 5000
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Chat app working')
})

app.use('/user', userRouter)





io.on("connection", (socket) => {
    console.log("New socket connection", socket.id)

    socket.emit("messages", messages)

    socket.on("newMessage", (message) => {
        const newMessage = new Message(message)
        newMessage.save()
    })

    io.emit("newMessage", newMessage)
})


app.listen(Port, async () => {
    try {
        await connection
        console.log('Connected to DB');
    } catch (error) {
        console.log("Something Error");
    }
    console.log(`Server is running at port http://localhost:${Port}`);
})