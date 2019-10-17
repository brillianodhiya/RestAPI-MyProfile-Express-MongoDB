'use strict'

const mongoose = require('mongoose')

const MyListSkills = mongoose.Schema({
    skill_name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    skill_icon: {
        type: String,
        required: true
    },
    skill_address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Skills', MyListSkills)