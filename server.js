import config from './config'
import app from './app'
import mongoose from 'mongoose'
import Socket from './socket'

const start = () => {  
  // start server
  const server = app.listen(config.port, () => {
    console.log(`Start server at ${server.address().port}`)
  })    

  // start database
  // const db = process.env.DATABASE.replace(
  //   '<PASSWORD>',
  //   process.env.DATABASE_PASSWORD
  // )  
  mongoose
    .connect(config.databaseURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'))
    
  const socket = new Socket(server)
  socket.start()
}

start()
