import express from 'express';
import fs from 'fs';
var app = express();
app.use(express.static('/dist/public'));
app.use('/angular/', express.static('dist/controllers/client'));
app.get('/', function (req, res) {
	fs.readFile('dist/views/static_themeing/index.html', 'utf-8',
		function(err, data) {
			if (err) {
				res.send(process.cwd() + " - couldn't find the file");
			} else {
				res.send(data);
			}
		}
	);
});
app.listen(8081, function() {
	console.log('Listening on  8081');
});