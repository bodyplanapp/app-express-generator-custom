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
db.User = db.import('../api/user/user.model');
db.Customer = db.import('../api/customer/customer.model');
db.PersonalTrainer = db.import('../api/personaltrainer/personaltrainer.model');

// Insert relations below
db.PersonalTrainer.belongsTo(db.User);
db.Customer.belongsTo(db.User);


module.exports = db;
