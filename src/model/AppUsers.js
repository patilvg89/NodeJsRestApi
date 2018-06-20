const appUsers = (sequelize, DataTypes) => {
    var AppUsers = sequelize.define('app_users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        }, email: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        }, social_id: {
            type: DataTypes.STRING
        }, password: {
            type: DataTypes.STRING
        }, is_logged_in: {
            type: DataTypes.INTEGER,
            defaultValue: false
        }, session_token: {
            type: DataTypes.STRING,
            defaultValue: false
        }, created_at: {
            //allowNull: false,
            type: DataTypes.DATE,
        }, updated_at: {
            //allowNull: false,
            type: DataTypes.DATE,
        }
    });

    AppUsers.associate = function (models) {
        AppUsers.hasOne(models.Profile)
    };

    //AppUsers.sync({alter: true});

    return AppUsers;
};

module.exports = appUsers;