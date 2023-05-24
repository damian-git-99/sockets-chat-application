import express from 'express'
import cors from 'cors'
import http from 'http'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import { socketsManager } from '../sockets/socketsManager'
import { connectDB } from './dbConfig'
dotenv.config()

const app = express()
const port = process.env.PORT
const server = http.createServer(app)
const io = new Server(server)

app.use(cors())
app.use(express.static('public'))

// sockets
socketsManager(io)

export function startServer() {
  server.listen(port, async () => {
    await connectDB()
    console.log('Server running on port: ', port)
  })
}
