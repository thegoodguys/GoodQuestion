var express = require('express');
var app = express();
// const pgp = require('pg-promise');
var bodyParser = require('body-parser');
const db = require('../postgres/database.js');
const databaseController = require('./controllers/databaseController.js')


app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))





//This works -- but gives error: Cannot set headers after they are sent to the client
app.post('/postUser', databaseController.saveUser, (req,res) => {
    res.json(res.locals.userData);
});

//This works
app.post('/postCompany', databaseController.saveCompany, (req,res) => {
    res.json(res.locals.companyData);
});

//This works
app.post('/postLocation', databaseController.saveLocation, (req,res) => {
    res.json(res.locals.locationData);
});

//This works 
app.post('/postRole', databaseController.saveRole, (req, res)=>{
    res.json(res.locals.roleData);
})

//This works
app.post('/postRound', databaseController.saveRound, (req, res)=>{
    res.json(res.locals.roundData);
})

//This works
app.post('/postType', databaseController.saveType, (req, res)=>{
    res.json(res.locals.typeData);
})


//This works
app.post('/postQuestion', databaseController.saveUser, databaseController.saveCompany, databaseController.saveLocation, databaseController.saveRole, databaseController.saveRound, databaseController.saveType, databaseController.saveQuestion, (req,res) => {
    res.json(res.locals.questionData);
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log("Listening on port 3000")

