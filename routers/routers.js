const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

// router.post('/paymentDetails',controllers.addPayment)
router.post('/create-checkout-session',controllers.addPayment)
router.get('/getTransactions',controllers.getTransactions)

module.exports = router