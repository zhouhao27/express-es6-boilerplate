import jwt from 'jsonwebtoken'
import config from '../../config'
import User from './user'

export default class UserService {
  async login(userParam) {
    if (userParam.email === 'user@example.com' && userParam.password === 'password') {      
      return { 
        id: 1,
        email: userParam.email,
        jwt: jwt.sign({
          id: userParam.email,
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
    try {
      const newUser = await User.create(userParam)
      return newUser  
    } catch(err) {
      console.error(err)
      return null
    }
  }

  logout(userName) {
    console.log(`logout(${userName})`)
    // TODO: how to make it work
  }
}