const createError = require('http-errors');

module.exports.auth = function(req,res,next){
    if (req.headers.isAuth === 'true') {
        next();
    }
    else {
        next(createError(403)); 
    }
}