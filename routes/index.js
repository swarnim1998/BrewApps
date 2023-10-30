const Express = require('express')
const Router = Express.Router()

/**token validation */
Router.use('/book', require('./book'))

Router.use(require('../middlewares/result'))
Router.use(require('../middlewares/error'))
module.exports = Router