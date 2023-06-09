const employeeModel = require("../models/employeeModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SECRET_KEY = 'shhhhhh' //Envinronment Variables

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body

  try {
    if (password != confirmPassword) {
      res.status(400).send({ status: 'error', msg: "Password/Confirm Password are not same" })
    }

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = await employeeModel.create({ name, email, password: hashedPassword })
    res.status(200).send({ status: 'success', user: { name: newUser.name, email: newUser.email } })
  } catch (error) {
    res.status(500).send({ status: 'error', error, msg: "Internal Server Error" })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const loggedInUser = await employeeModel.findOne({ email }, { email: 1, password: 1 })
    if (!loggedInUser) {
      res.status(404).send({ status: 'error', msg: "User not found" })
      return
    }

    const isPasswordMatch = await bcrypt.compare(password, loggedInUser.password)
    if (!isPasswordMatch) {
      res.status(400).send({ status: 'error', msg: "Password Incorrect",password })
      return
    }

    const userPayload = { email }
    //Generate the token
    const token = jwt.sign(userPayload, SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
    console.log(token)

    res.cookie('jwt', token)
    res.send({ status: 'success', msg: 'User Logged in Successfully' })

  } catch (error) {
    res.status(500).send({ status: 'error', error, msg: "Internal Server Error" })
  }
}

const logout = (req, res) => {

}

module.exports = {
  signup,
  login,
  logout,
  SECRET_KEY
}