var express = require('express'),
    path = require('path'),
    http = require('http');
var sqlite3 = require('sqlite3').verbose();
var app = express();
var db = new sqlite3.Database('./frm.db');
var server = http.createServer(app);

app.get('/', function(req, res) {
    db.each("SELECT * FROM Allocation_type", function (err, row) {
    console.log(row);
  });
	res.end();
});

server.listen(8085);
console.log('Listening on port 8085...');
