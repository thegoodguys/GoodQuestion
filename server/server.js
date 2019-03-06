var express = require('express');
var app = express();
// const pgp = require('pg-promise');
var bodyParser = require('body-parser');
const db = require('../postgres/database.js');
const databaseController = require('./controllers/databaseController.js')


app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-TypeError, Accept"
//     );
//     next();
//   });

  

// app.get('/gimme', (req, res)=>{
//     db.any('select * from roles')
//     .then(result => res.status(200).json(result))
//     .catch(err => res.status(500).json({error: err.message}))
// })






//THIS WORKS
app.post('/postToQuestions', (req,res) => {
    console.log("req.body", req.body)
    db.one('insert into questions (id, username, company_name, role, location, round, title, content, type, question_votes) values (${id}, ${username}, ${company_name}, ${role}, ${location}, ${round}, ${title}, ${content}, ${type}, ${question_votes}) returning *', {
        id: req.body.id,
        username: req.body.username,
        company_name: req.body.company_name,
        role: req.body.role,
        location: req.body.location,
        round: req.body.round,
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
        question_votes: req.body.question_votes
    })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({error: err.message}))
});

//WORK ON THIS
// app.post('/postQuestion', databaseController.saveUser, databaseController.saveCompany, databaseController.saveLocation, databaseController.saveRole, databaseController.saveRound, databaseController.saveType, (req,res) => {
//     res.status(200).json(res.locals);
// });

//This works -- but gives error: Cannot set headers after they are sent to the client
app.post('/postUser', databaseController.saveUser, (req,res) => {
    res.json(res.locals.userData);
});

//This works
app.post('/postCompany', databaseController.saveCompany, (req,res) => {
    res.json(res.locals.companyData);
});


app.post('/postLocation', databaseController.saveLocation, (req,res) => {
    console.log(res.locals.locationData);
    res.json(res.locals.locationData);
});

//This works 
app.post('/postRole', databaseController.saveRole, (req, res)=>{
    console.log(res.locals.roleData);
    res.json(res.locals.roleData);
})








app.post('/postToRoleTable', (req,res) => {
    db.one('INSERT INTO roleTable (id, name) VALUES(req.body.id, req.body.roleName)')
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({error: err.message}))
});


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log("Listening on port 3000")

