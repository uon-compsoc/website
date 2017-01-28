import express from 'express';
import fs from 'fs';
var app = express();
app.use('/', express.static('/public'));
app.use('/angular/', express.static('/controllers/angular'));
app.get('/', function (req, res) {
	fs.readFile('/views/static_themeing/index.html',
		function(err, data) {
			if (err) {
				throw err;
			} else {
				res.send(data);
			}
		}
	);
}
);
app.listen(8081, function() {
	console.log('Listening on  8081');
}
);