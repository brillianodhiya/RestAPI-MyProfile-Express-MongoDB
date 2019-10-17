'use strict'

const mongoose = require('mongoose')

const MyHistoryEducation = mongoose.Schema({
    school_name: {
        type: String,
        required: true,
        index: true,
        unique: true
    }, 
    school_address: {
        type: String,
        required: true
    },
    school_photo: {
        type: String,
        required: true
    },
    graduation_year: {
        type: String,
        required: true
    },
    school_description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Education', MyHistoryEducation)