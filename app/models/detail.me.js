'use strict'

const mongoose = require('mongoose')

const DetailMeSchema = mongoose.Schema({
    my_name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    my_nickname: {
        type: String,
        required: true
    },
    my_birth: {
        type: String,
        required: true
    },
    my_age: {
        type: String,
        required: true
    },
    my_photo: {
        type: String,
        required: true
    },
    my_role: {
        type: Array,
        required: true
    },
    my_primary_role: {
        type: String,
        required: true
    },
    my_secondary_role: {
        type: String,
        required: true
    },
    is_marriage: {
        type: Boolean,
        required: true
    },
    my_address: {
        type: String,
        required: true
    },
    my_girlfriend: {
        type: String,
        required: false
    },
    my_summary: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Detail', DetailMeSchema)