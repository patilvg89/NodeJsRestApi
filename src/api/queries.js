const models = require("../model/index.js");
/////////////////////
// Query Functions
/////////////////////

//GET - all users list

function getUsers(req, res, next) {
    models.AppUsers.all()
        .then(users => {
            res.status(200)
                .json({
                    status: 'success',
                    data: users,
                    message: 'Retrieved all users'
                })
        }).catch(function (err) {
        //return next(err);
        return res.status(200)
            .json({
                status: 'error',
                message: err//"User does not exists"
            });
    })


    /*db.any('select * from app_users FULL OUTER JOIN profile ON app_users.email = profile.fk_app_users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all users'
                })
        })
        .catch(function (err) {
            //return next(err);
            return res.status(200)
                .json({
                    status: 'error',
                    message: err//"User does not exists"
                });
        })*/
}

/////////////
// Exports
/////////////

module.exports = {
    getUsers: getUsers
};
