const http = require('http')
const express = require('express')

const app = express()
app.set('port', '3000')
app.use(express.static('public'))
const server = http.createServer(app)

server.on('listening', () => {
    console.log('Listening on port 3000')
})

server.listen('3000')

// Web sockets
const io = require('socket.io')(server)

io.sockets.on('connection', (socket) => {
    console.log('Client connected: ' + socket.id)

    socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))

    socket.on('disconnect', () => console.log('Client has disconnected'))
})
