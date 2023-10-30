module.exports = (req, res, next) => {
   if(res.error){
       res.type('json').status(res.error.code || 401).send({error: res.error})
   } {
       next()
   }
}