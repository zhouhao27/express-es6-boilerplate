import express from 'express'
import apiRouter from './api'
import compression from 'compression'

const app = express()

// functions
// setup middleware and routers
const setup = () => {  
  app.use(compression())
  app.use(express.json())
  app.use('/', express.static('public'));
  app.use('/api', apiRouter)
}

// run 
setup()

export default app