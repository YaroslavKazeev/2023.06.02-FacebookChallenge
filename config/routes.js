const express = require('express')
const route = express.Router()
const userController = require('../controller/feedController')

route.get('/', userController.getHomePage)
route.get('/add-new', userController.addNew)

route.post('/create-article', userController.createArticle)

route.get('/fullArticle/:id', userController.getFullArticle)
route.post('/delete-article/:id', userController.deleteArticle)

route.get('/edit/:id', userController.getEditPage)
route.post('/update-article/:id', userController.updateArticle)

module.exports = route;