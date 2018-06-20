const appUsers = (sequelize, DataTypes) => {
    var AppUsers = sequelize.define('app_users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        }, email: {
            type: DataTypes.STRING,
            primaryKey: true,
        }, social_id: {
            type: DataTypes.STRING
        }, password: {
            type: DataTypes.STRING
        }, is_logged_in: {
            type: DataTypes.BOOLEAN
        }, session_token: {
            type: DataTypes.STRING
        }
    });

    AppUsers.associate = function (models) {
        AppUsers.hasOne(models.Profile)
    };

    return AppUsers;
};

module.exports = appUsers;