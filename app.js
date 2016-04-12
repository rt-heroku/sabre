(function () {
  'use strict';
  var express = require('express');
  var app = express();

  require('./config/config_app')(app);
  require('./config/config_routes')(app);


  // START THE SERVER
  console.log('STARTING THE SABRE SERVER');
  console.log('-------------------------');
  app.set('port', (process.env.PORT || 3000));
  //app.listen(3000);
  app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  });

  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

})();
