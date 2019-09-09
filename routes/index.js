var express = require('express');
var router = express.Router();
const {ip} = require('../utils/middleware');
const {auth} = require('../utils/auth');

/* GET home page. */
router.get('/',ip, function(req, res, next) {
  // console.log(req.headers);
  res.render('index', { title: 'Express' });
});
router.get('/userCabinet', auth, (req,res,next)=>{
  res.send('your cab!');
})

module.exports = router;
