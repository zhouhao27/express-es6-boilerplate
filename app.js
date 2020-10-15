import express from 'express'
import bodyParser from 'body-parser'
import apiRouter from './api'
import config from './config'

const app = express()

setup()
const server = start()

function setup() {  
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/api', apiRouter)
}

function start() {
  return app.listen(config.port, () => {
    console.log(`Start server at ${server.address().port}`)
  })  
}

