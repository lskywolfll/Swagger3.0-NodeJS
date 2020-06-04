'use strict';

const express = require('express'),
  app = express();

const logger = require('./utils/logger');
const server = require('http').Server(app);

//se llama  a libreria encargada de los cors
const cors = require('cors');
//se llama swagger express mw para visualizar la documentacion de yaml
const SwaggerExpress = require('swagger-express-mw');
module.exports = app; // for testing

let config = {
  appRoot: __dirname // required config
};

const { port, host } = require('./config');

// Configuracion swagger 3.0
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const dateFormat = require('dateformat');
const now = new Date();

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  logger.info(dateFormat((now, 'default')) + '------------------->Inicializando servidor en ' + host + ':' + port);
  swaggerExpress.register(app);

  //app uso de cors, se permiten todos los tipos de origenes
  app.use(cors({ methods: ["*"], credentials: false, origin: "*" }));
  server.listen(port, host);

});
