const User = require('../models/User')

const register = (req, res) => {
  res.send('It works well')
}


const getUsers = async (req, res) => {
  try {
    const usersList = await User.find()
    if (usersList.length === 0) {
      return res.status(404).json({ message: 'No users have been added yet' })
    }
    return res.status(200).json({ message: 'List of users', usersList })
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  register,
  getUsers
}