var express = require('express');
var bodyParser = require('body-parser')
var handler = require('.././handler/ruleHandler.js')
var router = express.Router();
var app = express();

//create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use(function(req,res,next){
	//console.log(req);
	console.log("dsf");
	next();
})

router.get('/', function(req, res, next) {
	  res.send('index');
	});

router.get('/allrules', handler.getAllRules,function(req, res, next) {
	  res.send('next chanin');
});

router.post('/createrule',jsonParser,handler.createRule,function(req, res, next) {
	  res.send(req.body);
});


//app.use('/rules', router);


app.use(express.static('../public'));


module.exports = router;
