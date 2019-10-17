'use strict'

const WorkExperienceModel = require('../models/workexperience.me')

exports.create = async (req, res) => {
    if (!req.body.work_company) {
        return res.status(400).json({
            status: 400,
            message: 'Please input work company name'
        })
    }

    const WorkExperience = new WorkExperienceModel({
        work_company: req.body.work_company,
        work_interval: req.body.work_interval,
        work_address: req.body.work_address,
        work_at: req.body.work_at,
        work_description: req.body.work_description
    })

    await WorkExperience.save()
    .then((data) => {
        res.json({
            status: 200,
            message: 'Success Add Work Experience',
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
    await WorkExperienceModel.find()
    .then(data => {
        res.json({
            status: 200,
            message: 'Success get all work experience',
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