'use strict'

const EducationModel = require('../models/education.me')

exports.create = async (req, res) => {

    if (!req.body.school_name) {
        return res.status(400).json({
            status: 400,
            message: 'Please input school name'
        })
    }

    const Education = new EducationModel({
        school_name: req.body.school_name,
        school_address: req.body.school_address,
        school_photo: req.body.school_photo,
        graduation_year: req.body.graduation_year,
        school_description: req.body.school_description
    })

    await Education.save()
    .then((data) => {
        res.json({
            status: 200,
            message: 'Success Add Education',
            data: data
        })
    })
    .catch(err => {
        return res.status(500).json({
            status: 500,
            message: err.message || 'this error'
        })
    })
}

exports.get = async (req, res) => {
    await EducationModel.find()
    .then(data => {
        res.json({
            status: 200,
            message: 'Success get all Education history',
            data: data
        })
    })
    .catch(err => {
        return res.status(500).json({
            status: 500,
            message: err.message,
            data: []
        })
    })
}