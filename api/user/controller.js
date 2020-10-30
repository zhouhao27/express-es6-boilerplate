import express from 'express'
import UserService from './service'

const userRouter = express.Router()

/**
 * @swagger
 * definitions:
 *  User:
 *    type: "object"
 *    properties:
 *      username: 
 *        type: "string"
 *      password:
 *        type: "string"
 */ 

userRouter
  /**
   * @swagger
   * /user/login:
   *    post:
   *      tags:
   *      - "user"
   *      summary: "Login"
   *      description: ""
   *      operationId: "login"
   *      consumes:
   *      - "application/json"
   *      produces:
   *      - "application/json"
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "User object that needs to be added. Include username,password"
   *        required: true
   *        schema:
   *          $ref: "#/definitions/User"
   *      responses:
   *        200:
   *          description: "successful operation"
   *        401:
   *          description: "Wrong username or password!"
   */
  .post('/login', async (req, res) => {
    const userParams = req.body
    const service = new UserService()
    const user = await service.login(userParams)
    return res.json(user)
  })
  /**
   * @swagger
   * /user/register:
   *    post:
   *      tags:
   *      - "user"
   *      summary: "Register"
   *      description: ""
   *      operationId: "register"
   *      consumes:
   *      - "application/json"
   *      produces:
   *      - "application/json"
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "User object that needs to be added. Include username,password"
   *        required: true
   *        schema:
   *          $ref: "#/definitions/User"
   *      responses:
   *        200:
   *          description: "successful operation"
   *        401:
   *          description: "Wrong username or password!"
   */
  .post('/register', async (req, res) => {
    const userParams = req.body
    const service = new UserService()
    const user = await service.register(userParams)
    return res.json(user)
  })
  /**
   * @swagger
   * /user/logout:
   *    post:
   *      tags:
   *      - "user"
   *      summary: "Logout"
   *      description: ""
   *      operationId: "logout"
   *      consumes:
   *      - "application/json"
   *      produces:
   *      - "application/json"
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "User object that needs to be added. Include username,password"
   *        required: true
   *        schema:
   *          type: "object"
   *          properties:
   *            userName:
   *              type: "string"
   *      responses:
   *        200:
   *          description: "successful operation"
   */    
  .post('/logout', (req,res) => {
    const { userName } = req.body    
    const service = new UserService()
    service.logout(userName)
    res.status(200).json({ status: 'success' });    
  })

export default userRouter