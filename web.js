var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
 
  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
//var gzippo = require('gzippo');
//var express = require('express');
//var PORT = process.env.PORT || 3000;
//
//var app = express();
//app.listen(PORT, onListen);
// app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//
//function onListen() {
//  console.log('Listening on', PORT);
//}