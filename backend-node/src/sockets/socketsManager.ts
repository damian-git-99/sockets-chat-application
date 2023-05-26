import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface IO
  extends Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {}

export function socketsManager(io: IO) {
  // TODO: validate JWT
  // if token is not valid disconnect
  // TODO: get user from token
  // TODO: emit all connected users
  // TODO: socket join
  // TODO: listening to clients -> personal messages
  // TODO: handle disconnects
}
