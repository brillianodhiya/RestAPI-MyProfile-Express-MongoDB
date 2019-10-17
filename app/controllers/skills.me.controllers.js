'use strict'

const SkillsModel = require('../models/skills.me')

exports.create = async (req, res) => {

    if (!req.body.skill_name) {
        return res.status(400).json({
            status: 400,
            message: 'Please input skill name'
        })
    }

    const Skills = new SkillsModel({
        skill_name: req.body.skill_name,
        skill_icon: req.body.skill_icon,
        skill_address: req.body.skill_address
    })

    await Skills.save()
    .then((data) => {
        res.json({
            status: 200,
            message: 'Success Add Skill',
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
    await SkillsModel.find()
    .then(data => {
        res.json({
            status: 200,
            message: 'Success get all skill data',
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

exports.update = async (req, res) => {
    if (!req.body.skill_name) {
        return res.status(400).json({
            status: 400,
            message: 'Please input skill name'
        })
    }

    await SkillsModel.findByIdAndUpdate(req.params.id, {
        skill_name: req.body.skill_name,
        skill_icon: req.body.skill_icon,
        skill_address: req.body.skill_address
    }, { new: true })
    .then(data => {
        if (!data) {
            return res.status(404).json({
                status: 404,
                message: `Skill with id = ${req.params.id} not found`,
                data: []
            })
        }

        res.json({
            status: 200,
            message: `Success Update`,
            data: data
        })
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                status: 404,
                message: `Skill with id = ${req.params.id} not found`,
                data: []
            })
        }
        return res.status(500).json({
            status: 500,
            message: err.message,
            data: []
        })
    })
}

exports.delete = async (req, res) => {
    await SkillsModel.findByIdAndDelete(req.params.id)
    .then(data => {
        if (!data) {
            res.status(404).json({
                status: 404,
                message: `Skill with id = ${req.params.id} not found`,
            })
        }
        res.json({
            status: 200,
            message: `Delete Success`,
            _id: req.params.id
        })
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            res.status(404).json({
                status: 404,
                message: `Skill with id = ${req.params.id} not found`
            })
        }
        res.status(500).json({
            status: 500,
            message: err.message
        })
    })
}