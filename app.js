var rules = require('./routes/rules.js')
var dbconnection = require('./db/connection.js');
var express = require('express');
var app = express();

dbconnection();

app.use('/rule',rules);
app.listen(8080)	