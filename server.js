var express = require('express');
var app = express();
const pgp = require('pg-promise');
var bodyParser = require('body-parser');
const db = require('./elephantsql.js');


app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded




app.listen(3000); //listens on port 3000 -> http://localhost:3000/

