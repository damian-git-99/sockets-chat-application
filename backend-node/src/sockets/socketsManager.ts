import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { verifyToken } from '../utils/JwtUtils'
import { connectUser, disconnectUser, getUsers } from './socketsService'

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

    io.emit('users-list', await getUsers(id))

    client.on('disconnect', async (client) => {
      console.log('Client disconnected')
      await disconnectUser(id)
    })
  })
  // TODO: emit all connected users
  // TODO: socket join
  // TODO: listening to clients -> personal messages
  // TODO: handle disconnects
}
