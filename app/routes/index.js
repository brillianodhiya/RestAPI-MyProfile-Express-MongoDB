'use strict'

module.exports = (app) => {
    const DetailControllers = require('../controllers/detail.me.controllers')

    app.get('/detail', DetailControllers.get)
    app.get('/detail/:id', DetailControllers.getOne)
    app.post('/detail', DetailControllers.create)
    app.patch('/detail/:id', DetailControllers.update)
    app.delete('/detail/:id', DetailControllers.delete)
}