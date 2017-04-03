
let express = require('express');
let bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
let transports = require('./data/transports.json');

server.get('/api/transports', (req, res, next) => {
    //
    res.status(200).json(transports);
});


server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
