'use strict';
let { setupDataLayer }  = require('./service/DataLayer');
let path                = require('path');
let http                = require('http');
let fs                  = require('fs');
let cors                = require('cors');
let swaggerTools        = require('swagger-tools');
let jsyaml              = require('js-yaml');
let serveStatic         = require('serve-static');

let oas3Tools = require('oas3-tools');
let serverPort = process.env.PORT || 8080;
let spec = fs.readFileSync(path.join(__dirname, 'api/openapi.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// swaggerRouter configuration
let options = {
    controllers: path.join(__dirname, './controllers')
};

let expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
let app = expressAppConfig.getApp();

//Serve static files
// let serve = serveStatic(__dirname + '../../public', {index: 'index.html'});

//Able to use CORS  
app.use(cors());

app.use(serveStatic(__dirname + '/../../public', {index: 'index.html'}));

setupDataLayer()
.then(() => {
    http.createServer(app).listen(serverPort, function () {
        console.log('[Server Index] - Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('[Server Index] - Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
})
.catch((err) => {
    console.error("[Server Index] - I wasn't able to setup the data layer!");
    console.error("[Server Index] - Here is the error:\n" + err);
});