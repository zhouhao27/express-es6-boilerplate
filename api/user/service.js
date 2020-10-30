import jwt from 'jsonwebtoken'
import config from '../../config'

export default class UserService {
  async login(userParam) {
    if (userParam.username === 'admin' && userParam.password === 'admin') {
      console.log('login success...')
      return { 
        id: 1,
        username: userParam.username,
        jwt: jwt.sign({
          id: userParam.username,
        }, config.jwtSecret, {
          expiresIn: 60 * 60
        })
      }
    } else {
      // TODO:
      // res.status(401).json({
      //   error: {
      //     message: 'Wrong username or password!'
      //   }
      // });
      return null
    }
  }

  async register(userParam) {
    if (userParam.username === 'admin' && userParam.password === 'admin') {
      console.log('login success...')
      return { 
        id: 1,
        username: userParam.username,
        jwt: jwt.sign({
          id: userParam.username,
        }, config.jwtSecret, {
          expiresIn: 60 * 60
        })
      }
    } else {      
      // TODO:
      // res.status(401).json({
      //   error: {
      //     message: 'Wrong username or password!'
      //   }
      // });
      return null
    }
  }

  logout(userName) {
    console.log(`logout(${userName})`)
    // TODO: how to make it work
  }
}