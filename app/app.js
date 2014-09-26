var express = require('express');
var app = express();

app.get('/something.json', function (req, res) {
  var response = {
    version: '1.1.1'
  };

  res.json(response);
});

app.use('/', express.static(__dirname + '/clientside'));

app.listen(49001);
console.log('App running..');

