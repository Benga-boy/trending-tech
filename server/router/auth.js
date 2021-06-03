const { register, getUsers } = require('../controllers/auth')
const router = require('express').Router()


router.get('/register', register)
router.get('/users', getUsers)



module.exports = router