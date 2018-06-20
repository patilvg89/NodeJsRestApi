const profile = (sequelize, DataTypes) => {
    var Profile = sequelize.define('profile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, name: {
            type: DataTypes.STRING,
        }, dob: {
            type: DataTypes.STRING
        }, url_image: {
            type: DataTypes.STRING
        }, occupation: {
            type: DataTypes.STRING
        }, appUserEmail: {
            type: DataTypes.STRING,
        }, created_at: {
            allowNull: false,
            type: DataTypes.DATE
        }, updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });

    Profile.associate = function (models) {
        models.Profile.belongsTo(models.AppUsers,
            {foreignKey: 'appUserEmail'}
        )
    };

    return Profile;
};

module.exports = profile;