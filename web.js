var express = require('express');

var app = express.createServer(express.logger());

// create buffer variable
// read file and assign to buffer variable
var fs = require("fs");
var stat = fs.statSync("index.html");
var buffer = new Buffer(stat.size);
buffer = fs.readFileSync("index.html", "utf8");
var data = buffer.toString("utf8", 0, buffer.length);

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
