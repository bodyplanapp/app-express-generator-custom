/**
 * Main application file
 */
import express from 'express';
// import http from 'http';
import expressConfig from './config/express';
import registerRoutes from './routes';

// import config from './config/environment';
// import initWebSocketServer from './config/websockets';
// import seedDatabaseIfNeeded from './config/seed';


// Setup server
var app = express();
// var server = http.createServer(app);
// const wsInitPromise = initWebSocketServer(server);
expressConfig(app);
registerRoutes(app);



// Expose app
module.exports = app;
