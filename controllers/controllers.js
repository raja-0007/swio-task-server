const paymentModel = require('../models/models')
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51PJUGRSCSlPFnl40eXYhsPqHvL5qCLxiL0jkBGoAaXxrdn0OAekkhH4S5xmh7qcXvJDEZScBx20HZFmz9NXYzqRo00YL3tZaXR');
const addPayment = async (req, res) => {

    console.log(process.env.STRIPE_SECRET_KEY)
    const { details } = req.body
    console.log(details)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'inr',
                product_data: {
                    name: details.name,

                },
                unit_amount: details.amount * 100
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })
    // console.log(req.name, req.amount)
    // const payment = new paymentModel({
    //     name: req.body.name,
    //     amount: req.body.amount
    // })
    // await payment.save()
    //     .then((resp) => { console.log(resp); res.send({status:'success', id: session.id }) })

    res.send({ id: session.id })
}

const getTransactions = async (req, res) => {
    const transactions = await paymentModel.find()
    res.send(transactions)
}
const controllers = { addPayment, getTransactions }
module.exports = controllers