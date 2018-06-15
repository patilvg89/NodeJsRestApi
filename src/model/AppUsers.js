const appUsers = (sequelize, DataTypes) => {
    return sequelize.define('app_users', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
        }, email: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
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
};

module.exports = appUsers;