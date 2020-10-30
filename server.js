import express from 'express'
import config from './config'
import app from './app'

const start = () => {  
  return app.listen(config.port, () => {
    console.log(`Start server at ${server.address().port}`)
  })    
}

const server = start()
