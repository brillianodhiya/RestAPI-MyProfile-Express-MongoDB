'use strict'

const mongoose = require('mongoose')

const MyListProject = mongoose.Schema({
    project_title: {
        type: String,
        required: true,
        index: true, 
        unique: true
    },
    project_description: {
        type: String,
        required: true
    },
    project_ss: {
        type: String,
        required: true
    },
    project_repo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', MyListProject)