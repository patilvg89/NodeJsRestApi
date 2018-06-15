const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'carpool', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }, define: {
        timestamps: false // true by default
    }
});


const models = {
    AppUsers: sequelize.import('./appUsers'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;