const { addListener } = require('process')
const article=require('../model/Feed')

const getHomePage = (req, res) =>{
    article.find()
    .sort({create_at: '-1'})
    .then((result) => res.render('index', {users: result}))
    .catch(err => console.log(err))
}

const addNew = (req, res)=>{
    article.find()
    .then((err) => res.render('add-new', {err: err.errors}))
    .catch(err => console.log(err))
}

const createArticle = (req, res) => {
    let newArticle = new article(req.body);
    newArticle.save()
.then((result) => result.redirect('/'))
.catch(err=> res.render('add-new', {err : err.errors}))
}

const getFullArticle = (req, res) => {
    article.findById(req.params.id)
    .then(result => res.render('fullArticle', {user : result}))
    .catch(err => console.log(err))
}

const deleteArticle = (req, res) => {
    article.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}

const getEditPage = (req, res) => {
    article.findById(req.params.id)
    .then(result => {
        res.render('edit', {
            user: result            
        })
    })
    .catch(err => {console.log(err)})
}

const updateArticle = (req, res) => {
    article.findByIdAndUpdate(req.params.id, req.body)
    .then(result=> res.redirect(`/fullArticle/${result._id}`))
    .catch(err => console.log(err))
}
module.exports = {
    getHomePage,
    addNew,
    createArticle,
    getFullArticle,
    deleteArticle,
    updateArticle,
    getEditPage

}
