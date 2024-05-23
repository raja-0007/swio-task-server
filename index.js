const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const AppRouter = require('./routers/routers')
dotenv.config()
const corsOptions={
    origin: '*',
    optionSuccessStatus: 200
}


app.use(cors(corsOptions))
app.use(bodyParser.json())

// app.post('/api/create-checkout-session',(req,res)=>{

// })
app.use('/api/',AppRouter)

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    app.listen('7777',()=>{
        console.log('db connected and server started')
    })
})