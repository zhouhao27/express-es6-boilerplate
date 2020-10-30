import config from './config'
import app from './app'
import mongoose from 'mongoose'

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
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));  
}

start()
