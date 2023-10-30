const { nextTick } = require("process")

module.exports = (req, res, next) => {
    if(res.content){
        res.type('json').status(201).send({response: res.content})
    } else {
        next()
    }
 }