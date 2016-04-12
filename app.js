(function () {
  'use strict';
  var express = require('express');
  var app = module.exports = express();

  app.set('client_id',process.env.SABRE_CLIENT_ID || 'V1:2wsxopvowhfw47bw:DEVCENTER:EXT');
  app.set('client_secret', process.env.SABRE_CLIENT_SECRET || '0h8kNNHa');

  require('./config/config_app')(app);
  require('./config/config_routes')(app);


  // START THE SERVER
  console.log('STARTING THE SABRE SERVER');
  console.log('-------------------------');
  app.set('port', (process.env.PORT || 3000));
  //app.listen(3000);
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
    console.log('with client id - ', app.settings.client_id);
  });

  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

})();
