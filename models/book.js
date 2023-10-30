const Database = require('../configs/database')

const postSchema = Database.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
    createdOn: { type: Date, required: true },
    lastUpdate: { type: Date, required: true }
})

module.exports = Database.model("book", postSchema)