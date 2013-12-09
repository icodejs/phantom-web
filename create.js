
var server = require('webserver').create();

server.listen('127.0.0.1:4006', function (request, response) {
    var msg;


    try {
        var page = require('webpage').create();

        page.viewportSize = { width: 100, height: 300 };
        page.paperSize = { width: 100, height: 300, margin: '10px' };
        page.zoomFactor = 1;
        page.open('http://github.com/', function () {
            var b64 = page.renderBase64('png');
            response.statusCode = 200;
            response.write(b64);
            response.close();
        });
    } catch (e) {
        msg = "Failed rendering: \n" + e;
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', msg.length);
        response.write(msg);
        response.close();
    }
});

console.log('listening on localhost:4006');
