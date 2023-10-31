//libraries
const { response } = require('express')
const Moment = require('moment')
const { ObjectId } = require('mongodb')
const book = require('../models/book')

//models
const Book = require('../models/book')

//constants
const { CREATE_BOOK_SCHEMA, UPDATE_BOOK_SCHEMA, QUERY_SCHEMA, RETRIEVE_QUERY_SCHEMA} = require('../validations/joi')

/**
 * @define returns books list data
 * @param {*} profile 
 * @param {*} query 
 */
const retrieveBooks = async (query) => {
    try {
        await RETRIEVE_QUERY_SCHEMA.validateAsync(query)
        const matchQuery = {}
        if(query.id){
            matchQuery._id = new ObjectId(query.id)
        }
        const result = await Book.find(matchQuery, {}, {lean: true})
        if(!result.length){
            if(query.id){
                throw new Error(`Book with id ${query.id} doesn't exists in records`)
            } else {
                throw new Error('Books collection is empty insert some data')
            }
        }
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

/**
 * Creates book data
 * @param {*} body 
 */
const createBook = async (body) => {
    try {
        await CREATE_BOOK_SCHEMA.validateAsync(body)
        await Book.insertMany([{
            ...body,
            createdOn: Moment.utc().toISOString(),
            lastUpdate: Moment.utc().toISOString()
        }])
        return "Book Successfully Created"
    } catch (error) {
        console.log(error)
        throw error
    }
}

/**
 * @define updates books data
 * @param {*} query 
 * @param {*} body 
 */
const updateBook = async (query, body) => {
    try {
        await QUERY_SCHEMA.validateAsync(query)
        await UPDATE_BOOK_SCHEMA.validateAsync(body)
        const book = await Book.findOne({_id: new ObjectId(query.id)}, {_id: 1}, {lean: true})
        if(!book) {
            throw new Error("Book doesn't exist in records")
        }
        await Book.updateOne({ _id: new ObjectId(query.id) }, { 
            $set: { ...body, lastUpdate: Moment.utc().toISOString() } 
        })
        return "Book Successfully Updated"
    } catch (error) {
        throw error
    }
}

/**
 * @define deletes books
 * @param {*} query 
 */
const deleteBook = async (query) => {
    try {
        await QUERY_SCHEMA.validateAsync(query)
        const book = await Book.findOne({_id: new ObjectId(query.id)}, {_id: 1}, {lean: true})
        if(!book) {
            throw new Error("Book doesn't exist in records")
        }
        await Book.deleteMany({ _id: new ObjectId(query.id) }, {})
        return "Book Successfully Deleted"
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    retrieveBooks,
    createBook,
    updateBook,
    deleteBook
}