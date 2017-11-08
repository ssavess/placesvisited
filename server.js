var express = require('express');
var app = express();
var path = require('path');

path = __dirname + "/"+ "public";
//var port = process.env.PORT;
var port = 3000;

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
  })
  



app.listen(port, function () {
    console.log('dirname...: ' + __dirname);
    console.log('path...: ' + path);
    console.log('SERVER RUNNING... PORT: ' + port);
})