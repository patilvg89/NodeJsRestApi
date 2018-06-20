const models = require("../model/index.js");
/////////////////////
// Query Functions
/////////////////////

//GET - all users list

function getUsers(req, res, next) {
    models.AppUsers.all({
        include: {
            model: models.Profile// where: {fk_app_users_email: 'vrgptl@gmail.com'}
        }

    })
        .then(users => {
            res.status(200)
                .json({
                    status: 'success',
                    data: users,
                    message: 'Retrieved all users'
                })
        })
        .catch(function (err) {
            res.status(200)
                .json({
                    status: 'error',
                    message: err
                });
        })
}

/////////////
// Exports
/////////////

module.exports = {
    getUsers: getUsers
};
