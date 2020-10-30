import jwt from 'jsonwebtoken'
import config from '../../config'
import User from './user'

export default class UserService {
  async login(email, password) {
    console.log(`email=${email} password=${password}`)
    if (!email || !password) {
      throw new Error('Please provide email and password!')
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.passwordMatch(password, user.password))) {
      throw new Error('Incorrect email or password', 401)
    }

    console.log('Login success')
    return {
      token: jwt.sign({
        id: user.id,
      }, config.jwtSecret, {
        // TODO: config
        expiresIn: 60 * 60
      }),
      user
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