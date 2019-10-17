'use strict'

const mongoose = require('mongoose')

const MyWorkExperience = mongoose.Schema({
    work_company: {
        type: String, 
        required: true 
    },
    work_interval: {
        type: String,
        required: true
    },
    work_address: {
        type: String,
        required: true
    },
    work_at: {
        type: String,
        required: true
    },
    work_description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Experience', MyWorkExperience)