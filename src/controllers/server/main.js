import express from 'express';
import fs from 'fs';
var app = express();
app.use(express.static('dist/public'));
app.use('/scripts', express.static('dist/controllers/client'));
app.use('/node_modules', express.static('dist/node_modules'));

//temporary
app.use('/temp_demo', express.static('dist/views/temp_demo'));

//temporary name for the function takes the url to handle, the path to the associated view, and an array of filePaths to js data to read, the method will handle injecting the data for angular; it will handle injection including identifying the current page's core url for discerning it in the navbar.
function sendPageWithData(publicUrl, viewFile, dataFiles) {
	var viewFile, dataFiles;
	var dataFileCount;

	function compileAndSendOutput() {

	}
	function loadEachDataFile(nextToLoadIndex){
		if(nextToLoadIndex == dataFiles.length) {
			compileAndSendOutput
		}
	};
	fs.readFile('dist/views/static_themeing/index.html', 'utf-8',
		function(err, data) {
			if (err) {
				res.send(process.cwd() + " - couldn't find the file");
			} else {
				var viewFile = res.send(data);
				loadEachDataFile(0);
			}
		}
	);
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
}

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