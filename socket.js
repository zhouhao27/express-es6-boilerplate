import SocketIO from 'socket.io'

export default class Socket {
  constructor(server) {
    this.io = SocketIO(server)
  }
  
  start() {
    console.log('Socket server started')

    this.io.on('connection', (socket) => {
      console.log('New user connected')
    })
  }
}