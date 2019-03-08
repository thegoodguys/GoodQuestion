const db = require('../../postgres/database.js');
const databaseController = {};



//This works
databaseController.saveUser = (req, res, next) => {
    db.one('insert into users (username) values (${username}) ON CONFLICT (username) DO UPDATE SET username = excluded.username RETURNING id ;', {
        username: req.body.username
    })
    .then(result => {
        console.log('user success');
        res.locals.userData = result;
        next();
    })
    .catch(err => {
        console.log('in error', err);
        res.status(500).json({error: err.message})})  
}


//This works
databaseController.saveCompany = (req, res, next) => {
    db.one('insert into companies (company_name) values (${company_name})  ON CONFLICT (company_name) DO UPDATE SET company_name = excluded.company_name RETURNING id', {
        company_name: req.body.company_name
    })
    .then(result => {
        res.locals.companyData = result;
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}


//This works
databaseController.saveLocation = (req, res, next) => {
    db.one('insert into locations (location_name) values (${location_name}) ON CONFLICT (location_name) DO UPDATE SET location_name = excluded.location_name RETURNING id', {
        location_name: req.body.location_name
    })
    .then(result => {
        res.locals.locationData = result;
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}


//This works
databaseController.saveRole = (req, res, next) => {
    db.one('insert into roles (role_name) values (${role_name}) ON CONFLICT (role_name) DO UPDATE SET role_name = excluded.role_name RETURNING id', {
        role_name: req.body.role_name
    })
    .then(result => {
        res.locals.roleData = result;
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}


//This works
databaseController.saveRound = (req, res, next) => {
    db.one('insert into rounds (round) values (${round})  ON CONFLICT (round) DO UPDATE SET round = excluded.round RETURNING id', {
        round: req.body.round
    })
    .then(result => {
        res.locals.roundData = result;
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}


//This works
databaseController.saveType = (req, res, next) => {
    db.one('insert into types (type) values (${type})  ON CONFLICT (type) DO UPDATE SET type = excluded.type RETURNING id', {
        type: req.body.type
    })
    .then(result => {
        res.locals.typeData = result
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}




databaseController.saveQuestion = (req, res, next) => {
    console.log('HAAAAA',req.body);
    db.one('insert into questions (username, company_name, location_name, role_name, round, title, content, type, question_votes) values (${usernameID}, ${company_nameID}, ${location_nameID}, ${role_nameID}, ${roundID}, ${title}, ${content}, ${typeID}, ${question_votes}) returning *', {
        usernameID: res.locals.userData.id,
        company_nameID: res.locals.companyData.id,
        location_nameID: res.locals.locationData.id,
        role_nameID: res.locals.roleData.id,
        roundID: res.locals.roundData.id,
        title: req.body.title,
        content: req.body.content,
        typeID: res.locals.typeData.id,
        question_votes: 0
    })
    .then(result => {
        console.log("result for question:", result)
        res.locals.questionData = result
        return res.locals.questionData
    })
    .then(result => {
        console.log("final res.locals:", res.locals)
        // res.status(200).json(result);
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))
}

databaseController.getQuestions =(req, res, next) =>{
    db.any('SELECT companies.company_name, questions.title, questions.content, roles.role_name, locations.location_name, types.type, users.username, questions.question_votes FROM companies INNER JOIN questions ON questions.company_name = companies.id INNER JOIN roles ON roles.id = questions.role_name INNER JOIN locations ON locations.id = questions.location_name INNER JOIN types ON types.id = questions.type INNER JOIN users ON users.id = questions.username')
    .then(result => {
        res.locals.questions = result;
        next();
    })
    .catch(err => res.status(500).json({error: err.message}))

}



module.exports = databaseController;
