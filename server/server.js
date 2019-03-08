var express = require('express');
var app = express();
// const pgp = require('pg-promise');
var bodyParser = require('body-parser');
const db = require('../postgres/database.js');
const databaseController = require('./controllers/databaseController.js')


// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))


//This works -- but gives error: Cannot set headers after they are sent to the client
app.get('/getUser', databaseController.saveUser, (req,res) => {
    res.json(res.locals.userData);
});

//This works
app.get('/getCompany', databaseController.saveCompany, (req,res) => {
    res.json(res.locals.companyData);
});

//This works
app.get('/getLocation', databaseController.saveLocation, (req,res) => {
    res.json(res.locals.locationData);
});

//This works 
app.get('/getRole', databaseController.saveRole, (req, res)=>{
    res.json(res.locals.roleData);
})

//This works
app.get('/getRound', databaseController.saveRound, (req, res)=>{
    res.json(res.locals.roundData);
})

//This works
app.get('/getType', databaseController.saveType, (req, res)=>{
    res.json(res.locals.typeData);
})

app.get('/getQuestions', databaseController.getQuestions, (req,res)=>{
    res.json(res.locals.questions)
})


//This works
app.post('/postQuestion', databaseController.saveUser, databaseController.saveCompany, databaseController.saveLocation, databaseController.saveRole, databaseController.saveRound, databaseController.saveType, databaseController.saveQuestion, (req,res) => {
    console.log('Insert success!')
    res.status(200).json(res.locals.questionData);
});



app.listen(3002); //listens on port 3000 -> http://localhost:3000/
console.log("Listening on port 3000")

