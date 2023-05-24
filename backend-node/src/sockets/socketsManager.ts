import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface IO
  extends Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {}

export function socketsManager(io: IO) {}
