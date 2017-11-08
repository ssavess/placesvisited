var express = require('express');
var app = express();
var path = require('path');
//var path = __dirname + "/public/views/";
//path = __dirname + "/public/views/";
//var port = process.env.PORT;
var port = process.env.PORT || 3000;

app.set('views', path.resolve(__dirname,'public','views'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
  })
  
app.listen(port, function () {
    console.log('dirname...: ' + __dirname);
    console.log('path...: ' + path);
    console.log('SERVER RUNNING... PORT: ' + port);
})