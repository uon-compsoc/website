import express from 'express';
import fs from 'fs';
import * as navigationData from '../../data/nav.js';

var dataToSendWithViewTemplate = 'var pageData = {' + '"nav":' + JSON.stringify(navigationData);

var app = express();

//setup public availability of certain files for direct download
app.use(express.static('dist/public'));
app.use('/scripts', express.static('dist/controllers/client'));
app.use('/node_modules', express.static('dist/node_modules'));

// //temporary
// app.use('/temp_demo', express.static('dist/views/temp_demo'));

//temporary name for the function takes the url to handle, the path to the associated view, and an array of filePaths to js data to read, the method will handle injecting the data for angular; it will handle injection including identifying the current page's core url for discerning it in the navbar.
//dataFiles should be of the form: [{"name":"sample", "path":"sample/path.example"},]
function setupPage(publicUrl, viewFile, component) {
	var viewFileContent, compentJson;
	function compileAndSendOutput() {
		var compiledJson = dataToSendWithViewTemplate;
		for(let i = 0; i < navigationData.links.length; ++i) {
			if(publicUrl == navigationData.links[i].href) {
				compiledJson = compiledJson + ',"currentPage":' + JSON.stringify(navigationData.links[i]);
			}
		}
		compiledJson = compiledJson + '};' + "angular.module('corePageApp').component('coreContext', " + JSON.stringify(component) + ")";


		let outputData = viewFileContent.replace('{{BUNDLED_DATA_FOR_ANGULAR}}', compiledJson);
		app.get(publicUrl, function (req, res) {
			res.send(outputData);
		});
	}

	//load the view file
	fs.readFile(viewFile, 'utf-8',
		function(err, data) {
			if (err) {
				console.log('Could not load dataFile: ' + 'navigation-data-file');
				throw err;
			} else {
				viewFileContent = data;

				//load the component/subpage file
				fs.readFile(component.template, 'utf-8',
					function(err, data) {
						if (err) {
							console.log('Could not load dataFile: ' + component.template);
							throw err;
						} else {
							component.template = data;
							//load the component/subpage file
							fs.readFile(component.controller, 'utf-8',
								function(err, data) {
									if (err) {
										console.log('Could not load dataFile: ' + component.template);
										throw err;
									} else {
										component.template = data;


										compileAndSendOutput();
									}
								}
							);

							compileAndSendOutput();
						}
					}
				);
			}
		}
	);
}

setupPage('/', 'dist/views/templates/base.html', {template: 'dist/views/templates/home.html', controller: 'dist/controllers/client/homePageController.js'});
setupPage('/lorem', 'dist/views/templates/base.html', {template: 'dist/views/templates/home.html', controller: 'dist/controllers/client/homePageController.js'});
app.listen(8081, function() {
	console.log('Listening on  8081');
});
