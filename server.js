'use strict';

const Path  = require('path');
const Hapi  = require('hapi');
const Inert = require('inert');
const JWT   = require('jsonwebtoken');
var models  = require('./server/models');
var routes  = require('./server/routes');
var authService = require("./server/services/AuthService");
const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: process.env.HOST,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'build'),
      },
    },
});

const validate = async function (decoded, request) {
    console.log('~~~~~~~~~~>>> Token Validation --- ', decoded);
    let response = await authService.validateToken(decoded.email, decoded.password);
    if (response > 0) {
      return { isValid: false };
    }
    else {
      return { isValid: true };
    }
};

const init = async () => {
    await models.sequelize.sync().then(function() {
        server.start();
    });
    await server.register(Inert);
    await server.register(require('hapi-auth-cookie'));
    await server.register(require('hapi-auth-jwt2'));
    server.auth.strategy('jwt', 'jwt',  {key: 'madeby949111veera@5322',
                                            validate: validate,
                                            verifyOptions: { algorithms: [ 'HS256' ] }
                                        });
  
    server.ext('onRequest', function(request, replay){
      console.log('request received : '+ request.path);
      return replay.continue;
    });
    server.auth.default('jwt');
    
    server.route({ 
        method: 'GET', 
        path: '/{path*}', 
        config: { auth: false },
        handler: {
            directory: {
                path: '.', 
                redirectToSlash: true, 
                lookupCompressed: true, 
                listing:false, 
                index: true
            }
        }
    });
    
    for (var route in routes) {
        server.route(routes[route]);
    }
    
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
