//i am the best
//yeha boi
var http = require('http');
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World 42!\n');
}).listen(8081);

app.get('/', function (req, res) {
	res.send('Hello World!');
}
);
app.listen(8081, function() {
	console.log('Listening on  8081');
}
);