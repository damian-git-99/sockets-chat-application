import express from 'express'
import cors from 'cors'
import http from 'http'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import { socketsManager } from '../sockets/socketsManager'
import { connectDB } from './dbConfig'
import { router as authRoutes } from '../routes/auth'
dotenv.config()

const app = express()
const port = process.env.PORT
const server = http.createServer(app)
const io = new Server(server)

// express config
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/auth', authRoutes)

// sockets
socketsManager(io)

export function startServer() {
  server.listen(port, async () => {
    await connectDB()
    console.log('Server running on port: ', port)
  })
}
