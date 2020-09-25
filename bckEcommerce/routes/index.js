var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info',function(req,res){
    var infoObject = {};
    infoObject.cuenta="0801199918960";
    infoObject.nombre="Diego Fernando Cortez";
    infoObject.email="dfrivera026@gmail.com";
    res.json(infoObject);
});//Aca termina

router.get('/hook',function(req,res){
  res.render("hook",{});
});//get hook

router.post('/hook', function(req,res){
  var body= req.body;
  console.log(body);
  res.render("hook",body);
});

module.exports = router;

