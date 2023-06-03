import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface IO
  extends Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {}

export function socketsManager(io: IO) {
  io.on('connection', (client) => {
    console.log('Client connected')

    client.on('disconnect', (client) => {
      console.log('Client disconnected')
    })
  })
  // TODO: validate JWT
  // if token is not valid disconnect
  // TODO: get user from token
  // TODO: emit all connected users
  // TODO: socket join
  // TODO: listening to clients -> personal messages
  // TODO: handle disconnects
}
