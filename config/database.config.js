'use strict'

require('dotenv').config()

const Password = process.env.DB_PW

module.exports = {
    DB: `mongodb+srv://brilliano:${Password}@cluster0-lwida.gcp.mongodb.net/test?retryWrites=true&w=majority`
}