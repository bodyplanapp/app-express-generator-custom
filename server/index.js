import config from './config/environment';
import sqldb from './sqldb';
import http from 'http';
import app from './app';

// Setup server
var server = http.createServer(app);

// Start server
function startServer() {
    server.listen(config.port, config.ip, function () {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
}

sqldb
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully. OK');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sqldb.sync({ force: true })
    //   .then(wsInitPromise)
    //   .then(primus => {
    //       app.primus = primus;
    //   })
    //   .then(seedDatabaseIfNeeded)
    .then(startServer)
    .catch(err => {
        console.log('Server failed to start due to error: %s', err);
    });

// Export the application
// exports = module.exports = require('./app');