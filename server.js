
var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
