'use strict'

// import package
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./app/routes')

// create app
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configure database
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.DB, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(() => {
    console.log('DB Connection Success')
}).catch(err => {
    console.log('DB Connection Error', err)
    process.exit();
})

// end database

// app start

app.get('/', (req, res) => {
    res.send(
        "Wellcome To Brilliano API Profile"
    )
})

routes(app)

app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is Running`)
})