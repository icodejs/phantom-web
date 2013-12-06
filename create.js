
var server = require('webserver').create();

server.listen('127.0.0.1:4006', function (request, response) {
    var msg;

    try {
        var page = require('webpage').create();

        page.viewportSize = { width: 7000, height: 10000 };
        page.paperSize = { width: 7000, height: 10000, margin: '10px' };
        page.zoomFactor = 2;
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
