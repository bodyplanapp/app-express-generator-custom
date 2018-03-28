/**
 * Sequelize initialization module
 */
import config from '../config/environment';
import Sequelize from 'sequelize';

// var db = {
//     Sequelize,
//     sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
// };

const db = new Sequelize('bodyplan', 'bodyplan', 'bodyplan', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    // storage: 'path/to/database.sqlite'
});


// Insert models below
// db.Message = db.sequelize.import('../api/message/message.model');
// db.Thing = db.sequelize.import('../api/thing/thing.model');
// db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
