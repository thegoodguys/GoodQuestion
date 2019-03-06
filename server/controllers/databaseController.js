const db = require('../../postgres/database.js');
const databaseController = {};

//This works
databaseController.saveUser = (req, res, next) => {
    db.one('insert into users (username) values (${username}) returning *', {
        username: req.body.username
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.userData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}


//This works
databaseController.saveCompany = (req, res, next) => {
    db.one('insert into companies (name) values (${name}) returning *', {
        name: req.body.name
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.companyData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}



databaseController.saveLocation = (req, res, next) => {
    db.one('insert into locations (location_name) values (${location_name}) returning *', {
        location_name: req.body.location_name
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.locationData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}



databaseController.saveRole = (req, res, next) => {
    db.one('insert into roles (role_name) values (${role_name}) returning *', {
        role_name: req.body.role_name
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.roleData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}



databaseController.saveRound = (req, res, next) => {
    db.one('insert into rounds (round) values (${round}) returning *', {
        round: req.body.round
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.roundData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}



databaseController.saveType = (req, res, next) => {
    db.one('insert into types (type) values (${type}) returning *', {
        type: req.body.type
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.typeData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}









databaseController.saveQuestion = (req, res, next) => {
    const username = res.locals.userData.username;
    const company_name = res.locals.companyData.company_name;
    const role = res.locals.roleData.role_name;
    const location = res.locals.locationData.location_name;
    const round = res.locals.roundData.round;
    const type = res.locals.typeData.type;
    const question_votes = 0;

    db.one('insert into questions (id, username, company_name, role, location, round, title, content, type, question_votes) values (${id}, ${username}, ${company_name}, ${role}, ${location}, ${round}, ${title}, ${content}, ${type}, ${question_votes}) returning *', {
        id: req.body.id,
        username: username,
        company_name: company_name,
        role: role,
        location: location,
        round: round,
        title: req.body.title,
        content: req.body.content,
        type: type,
        question_votes: question_votes
    })
    .then(result => res.status(200).json(result))
    .then(result => res.locals.questionData = result)
    .catch(err => res.status(500).json({error: err.message}))
    next()
}





module.exports = databaseController;
