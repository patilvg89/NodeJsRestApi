const models = require("../model/index.js");
/////////////////////
// Query Functions
/////////////////////

//POST -> Register User
function registerUser(req, res, next) {
    return models.AppUsers
        .create({
            email: req.body.email,
            social_id: req.body.social_id,
            password: req.body.password,
            is_logged_in: 0,
            session_token: null,
            created_at: Date.now(),
            updated_at: Date.now(),
        })
        .then(user => {
            res.status(200)
                .json({
                    status: 'success',
                    data: user,
                    message: 'user created'
                })
        }).catch(function (err) {
            res.status(400)
                .json({
                    status: 'error',
                    message: err.toString()
                });
        })
}

//GET-> Login User
function loginUser(req, res, next) {
    models.AppUsers.findOne({
        where: {email: req.param.email, password: req.param.password},
        include: {model: models.Profile}
    }).then(user => {
        res.status(200)
            .json({
                status: 'success',
                data: user,
                message: 'Login Success'
            })
    }).catch(function (err) {
        res.status(400)
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
    login: loginUser,
    register: registerUser
};
