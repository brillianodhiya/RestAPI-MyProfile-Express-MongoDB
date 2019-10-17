'use strict'

module.exports = (app) => {
    const DetailControllers = require('../controllers/detail.me.controllers')

    app.get('/detail', DetailControllers.get)
    app.get('/detail/:id', DetailControllers.getOne)
    app.post('/detail', DetailControllers.create)
    app.patch('/detail/:id', DetailControllers.update)
    app.delete('/detail/:id', DetailControllers.delete)

    const SkillsControllers = require('../controllers/skills.me.controllers')

    app.get('/skill', SkillsControllers.get)
    app.post('/skill', SkillsControllers.create)
    app.patch('/skill/:id', SkillsControllers.update)
    app.delete('/skill/:id', SkillsControllers.delete)

    const EducationControllers = require('../controllers/education.me.controllers')

    app.get('/edu', EducationControllers.get)
    app.post('/edu', EducationControllers.create)

    const WorkExperienceControllers = require('../controllers/workexperience.me.controllers')

    app.get('/work', WorkExperienceControllers.get)
    app.post('/work', WorkExperienceControllers.create)

    const ProjectControllers = require('../controllers/project.me.controllers')

    app.get('/project', ProjectControllers.get)
    app.post('/project', ProjectControllers.create)
    app.delete('/project/delete', ProjectControllers.delete)
}