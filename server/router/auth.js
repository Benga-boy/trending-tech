const { register } = require('../controllers/auth')

const router = require('express').Router()


router.get('/register', register)




module.exports = router