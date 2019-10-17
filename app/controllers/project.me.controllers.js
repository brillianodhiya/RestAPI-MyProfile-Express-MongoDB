'use strict'

const ProjectModel = require('../models/project.me')

exports.create = async(req, res) => {
    if (!req.body.project_title) {
        return res.status(400).json({
            status: 400,
            message: 'Please input project title'
        })
    }

    const Project = new ProjectModel({
        project_title: req.body.project_title,
        project_description: req.body.project_description,
        project_ss: req.body.project_ss,
        project_repo: req.body.project_repo
    })

    await Project.save()
    .then((data) => {
        res.json({
            status: 200,
            message: 'Success add project',
            data: data
        })
    })
    .catch(err => {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    })
}

exports.get = async (req, res) => {
    await ProjectModel.find()
    .then(data => {
        res.json({
            status: 200,
            message: 'Success get all project',
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

exports.delete = async (req, res) => {
    await ProjectModel.findByIdAndDelete(req.body.id)
    .then(data => {
        if (!data) {
            res.status(404).json({
                status: 404,
                message: `Could not found id = ${req.body.id}`
            })
        }

        res.json({
            status: 200,
            message: `Delete Success`,
            _id: req.params.id
        })
    })
    .catch(err => {
        if (err. kind === 'ObjectId') {
            res.status(404).json({
                status: 404,
                message: `Could not find this id = ${req.body.id}`
            })
        }

        res.status(500).json({
            status: 500,
            message: err.message
        })
    })
}