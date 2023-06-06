import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { verifyToken } from '../utils/JwtUtils'
import {
  connectUser,
  disconnectUser,
  getUsers,
  saveMessage
} from './socketsService'

interface IO
  extends Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {}

export async function socketsManager(io: IO) {
  io.on('connection', async (client) => {
    console.log('Client connected')

    const payload = verifyToken(client.handshake.query.token as string)
    if (!payload) {
      console.log('Invalid token')
      return client.disconnect()
    }
    const { id } = payload
    await connectUser(id)

    /* `client.join(id)` is a method in Socket.IO that allows the client to join a specific room
    identified by the `id` parameter. This is useful for creating private or group chat rooms where
    only certain clients can communicate with each other. In this code, the client is joining a room
    with the same ID as their user ID, which allows them to receive personal messages and updates
    specific to their user account. */
    client.join(id)

    io.emit('users-list', await getUsers())

    client.on('message', async (messageData) => {
      const message = await saveMessage(messageData)
      io.to(message.to).emit('message', message)
    })

    client.on('disconnect', async (client) => {
      console.log('Client disconnected')
      await disconnectUser(id)
      io.emit('users-list', await getUsers())
    })
  })
  // TODO: listening to clients -> personal messages
}
