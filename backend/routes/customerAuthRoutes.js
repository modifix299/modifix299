const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getOneCustomer,
} = require('../controllers/customerAuthController')
const { protect } = require('../middleware/authMiddleware')

router.get('/me', protect, getOneCustomer)
router.post('/login', loginUser)
router.post('/register', registerUser)

module.exports = router
 