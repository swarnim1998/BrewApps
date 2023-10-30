const Joi = require('@hapi/joi')

const CREATE_BOOK_SCHEMA = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required()
})

const UPDATE_BOOK_SCHEMA = Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    summary: Joi.string().optional()
})

const QUERY_SCHEMA = Joi.object({
    id: Joi.string().length(12).required()
})

const RETRIEVE_QUERY_SCHEMA = Joi.object({
    id: Joi.string().length(24).optional()
})


module.exports = { UPDATE_BOOK_SCHEMA, QUERY_SCHEMA , CREATE_BOOK_SCHEMA, RETRIEVE_QUERY_SCHEMA }