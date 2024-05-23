const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    name:String,
    amount:String,
    status:String
})

const paymentModel = new mongoose.model('paymentDetails',paymentSchema)

module.exports = paymentModel