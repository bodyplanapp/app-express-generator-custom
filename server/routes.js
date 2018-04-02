/**
 * Main application routes
 */

'use strict';

import errors from './api/errors';
import path from 'path';


export default function (app) {
    // Insert routes below
    app.use('/api/users', require('./api/user'));
    app.use('/api/personaltrainer', require('./api/personaltrainer'));
    app.use('/api/customer', require('./api/customer'));
    
    // app.use('/auth', require('./auth').default);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.status(200).send({ menssage: 'Tienes acceso' })
            // res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}
