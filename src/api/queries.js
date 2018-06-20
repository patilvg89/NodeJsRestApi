const models = require("../model/index.js");
/////////////////////
// Query Functions
/////////////////////

//GET - all users list

function getUsers(req, res, next) {
    models.AppUsers.all({
        include: {model: models.Profile, /* where: {email: 'vrgptl@gmail.com'}*/}
    }).then(users => {
        res.status(200)
            .json({
                status: 'success',
                data: users,
                message: 'Retrieved all users'
            })
    }).catch(function (err) {
        res.status(200)
            .json({
                status: 'error',
                message: err
            });
    })
}


function login(req, res, next) {
    models.AppUsers.findOne({
        where: {email: 'vrgptl@gmail.com'},
        include: {model: models.Profile}
    }).then(user => {
        res.status(200)
            .json({
                status: 'success',
                data: user,
                message: 'Retrieved user'
            })
    }).catch(function (err) {
        res.status(200)
            .json({
                status: 'error',
                message: err.toString()
            });
    })
}

/////////////
// Exports
/////////////

module.exports = {
    getUsers: getUsers,
    login: login,
};
