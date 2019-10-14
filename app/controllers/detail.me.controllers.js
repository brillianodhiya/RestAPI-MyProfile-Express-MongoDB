'use strict'

const DetailModel = require('../models/detail.me')

exports.create = async (req, res) => {

    const detail = new DetailModel({
        my_name: req.body.my_name || 'Brilliano Dhiya Ulhaq',
        my_nickname: req.body.my_nickname || 'Brilli',
        my_birth: req.body.my_birth || '24 Agustus 2000',
        my_age: req.body.my_age || '19',
        my_photo: req.body.my_photo || 'https://instagram.frix8-1.fna.fbcdn.net/vp/6d9aa3f974208a38187285bd1f554e4a/5E3FADFE/t51.2885-15/e35/69600099_407299656639760_6837981521559793580_n.jpg?_nc_ht=instagram.frix8-1.fna.fbcdn.net&_nc_cat=104&ig_cache_key=MjE0MjY2NjA2NDQxMzAwMjgzMQ%3D%3D.2',
        my_role: req.body.my_role || 'Fullstack Developer',
        my_primary_role: req.body.my_primary_role || 'Frontend Developer',
        my_secondary_role: req.body.my_secondary_role || 'Comic Artist',
        is_marriage: req.body.is_marriage || false,
        my_address: req.body.my_address || 'Trenggalek, RT 20 RW 05 Dusun Jarakan, Desa Karangsoko, Kecamatan Trenggalek, Jawa Timur 66304',
        my_girlfriend: req.body.my_girlfriend,
        my_summary: req.body.my_summary || `Full Stack Developer yang menguasai berbagai bahasa pemrograman. Dengan pengalaman mengembangkan beberapa
        teknologi di antaranya, RESTful API, aplikasi berbasis web menggunakan API maupun PHP, aplikasi berbasis android,
        dan template website modern.`
    })

    await detail.save()
    .then((data) => {
        res.json({
            status: 200,
            message: 'Success add data',
            data: data
        })
    })
    .catch(err => {
        return res.status(500).json({
            status: 500,
            message: err.message || 'Error'
        })
    })
}

exports.get = async (req, res) => {
    await DetailModel.find()
    .then(data => {
        res.json({
            status: 200,
            message: 'Success Get Detail Profile',
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

exports.getOne = async (req, res) => {
    await DetailModel.findById(req.params.id)
    .then(data => {
        if (!data) {
            return res.status(404).json({
                status: 404,
                message: 'Data not Found'
            })
        }

        res.json({
            status: 200,
            message: `Data Found With id = ${req.params.id}`,
            data: data
        })
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                status: 404,
                message: `Data with id = ${req.params.id} not Found`,
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

exports.update = async (req, res) => {

    await DetailModel.findByIdAndUpdate(req.params.id, {

        my_age: req.body.my_age || 19,
        my_photo: req.body.my_photo || 'https://instagram.frix8-1.fna.fbcdn.net/vp/6d9aa3f974208a38187285bd1f554e4a/5E3FADFE/t51.2885-15/e35/69600099_407299656639760_6837981521559793580_n.jpg?_nc_ht=instagram.frix8-1.fna.fbcdn.net&_nc_cat=104&ig_cache_key=MjE0MjY2NjA2NDQxMzAwMjgzMQ%3D%3D.2',
        my_role: req.body.my_role || 'Fullstack Developer',
        my_primary_role: req.body.my_primary_role || 'Frontend Developer',
        my_secondary_role: req.body.my_secondary_role || 'Comic Artist',
        is_marriage: req.body.is_marriage || false,
        my_address: req.body.my_address || 'Trenggalek, RT 20 RW 05 Dusun Jarakan, Desa Karangsoko, Kecamatan Trenggalek, Jawa Timur 66304',
        my_girlfriend: req.body.my_girlfriend,
        my_summary: req.body.my_summary || `Full Stack Developer yang menguasai berbagai bahasa pemrograman. Dengan pengalaman mengembangkan beberapa
        teknologi di antaranya, RESTful API, aplikasi berbasis web menggunakan API maupun PHP, aplikasi berbasis android,
        dan template website modern.`
        
    }, { new: true })
    .then(data => {
        if(!data) {
            return res.status(404).json({
                status: 404,
                message: `Could not Find id ${req.params.id}`,
                data: []
            })
        }

        res.json({
            status: 200,
            message: 'Update Success',
            data: data
        })
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                status: 404,
                message: `Could not Find id ${req.params.id}`,
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
    await DetailModel.findByIdAndDelete(req.params.id)
    .then(data => {
        if (!data) {
            res.status(404).json({
                status: 404,
                message: `Could not found id = ${req.params.id}`
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
                message: `Could not find this id = ${req.params.id}`
            })
        }

        res.status(500).json({
            status: 500,
            message: err.message
        })
    })
}