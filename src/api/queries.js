var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const models = require("../model/index.js");
const secret = 'ajhfgjgdaskgfahgjadsfgkjdasgfgdskmsdfab';
/////////////////////
// Query Functions
/////////////////////

//POST -> Register User
function registerUser(req, res, next) {

    models.AppUsers.create({
        email: req.body.email,
        social_id: req.body.social_id,
        password: req.body.password,
        is_logged_in: 0,
        session_token: null,
        created_at: Date.now(),
        updated_at: Date.now(),
    }).then(user => {
        responseSuccess(res, user, "User created successfully.")
    }).catch(function (err) {
        responseFailure(res, 400, err)
    })
}

//POST-> Login User
function authenticate(req, res, next) {
    models.AppUsers.findOne({
        where: {email: req.body.email, password: req.body.password},
        include: {model: models.Profile},
    }).then(user => {
        if (!user) {
            responseFailure(res, 404, 'Authentication failed. Wrong password.');
        } else {
            //if user is found and password is right, create a token with only our given payload, we don't want to pass in the entire user since that has the password
            const payload = {
                email: user.email
            };

            var token = jwt.sign(payload, secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            user.session_token = token;
            user.save().then(() => {
                responseSuccess(res, user, 'Authentication success')
            }).catch(error => {
                responseFailure(res, 404, error);
            })
        }


    }).catch(function (err) {
        responseFailure(res, 500, err)
    })
}


//GET- ALL Users
function getAllUsers(req, res, next) {
    verifyToken(req, res, next, fetchAllUsers)
}

function fetchAllUsers(req, res, next) {
    models.AppUsers.all({})
        .then(user => {
            responseSuccess(res, user, "All Users")
        })
        .catch(err => {
            responseFailure(res, 500, "All Users Failed")
        })
}

function verifyToken(req, res, next, methods) {
    var token = req.headers['x-access-token'];
    if (!token) {
        responseFailure(res, 403, 'No token provided.');
    }
    jwt.verify(token, secret, function (err, decoded) {
        if (err) {
            responseFailure(res, 403, 'Failed to authenticate token.');
        }
        // if everything good, save to request for use in other routes
        if (req.email = decoded.email) {
            methods(req, res, next)
        }
    });
}

//Common Function
function responseSuccess(res, data, message) {
    return res.status(200)
        .json({
            success: true,
            data: data,
            message: message
        })
}


function responseFailure(res, code, message) {
    return res.status(code)
        .json({
            success: false,
            message: message
        });
}

/////////////
// Exports
/////////////

module.exports = {
    getAllUsers: getAllUsers,
    authenticate: authenticate,
    register: registerUser
};
