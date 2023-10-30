const Express = require('express')
const Router = Express.Router()

//services
const {createBook, updateBook, deleteBook, retrieveBooks} = require('../services/book')

Router.get('/', async (req, res, next) => {
    try {
        res.content = await retrieveBooks(req.query)
    } catch (error) {
        res.error = {
            message: error.message,
            code: error.statusCode || 401
        }
    } finally {
       next()
    }
})

Router.post('/', async (req, res, next) => {
    try {
       res.content = await createBook(req.body)
    } catch (error) {
        res.error = {
            message: error.message,
            code: error.statusCode || 401
        }
    } finally {
       next()
    }
})

Router.patch('/:id', async (req, res, next) => {
    try {
        res.content = await updateBook(req.params, req.body)
    } catch (error) {
        res.error = {
            message: error.message,
            code: error.statusCode || 401
        }
    } finally {
       next()
    }
})

Router.delete('/:id', async (req, res, next) => {
    try {
        res.content = await deleteBook(req.params)
    } catch (error) {
        res.error = {
            message: error.message,
            code: error.statusCode || 401
        }
    } finally {
       next()
    }
})
module.exports = Router