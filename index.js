var express = require('express');
var app = express();
var request = require('request');
var phantomServerAddr = 'http://localhost:4006';

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get('/convert', function (req, res) {
    request(phantomServerAddr, function (err, response, body) {
        var buf = new Buffer(body, 'base64');
        res.end(buf);
    });
});

app.listen(4007);
