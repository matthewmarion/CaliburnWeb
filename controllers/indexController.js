let request = require('request');
let server = 'http://localhost:3000'

if (process.env.NODE_ENV === 'production') {
	server = 'https://caliburn-web.herokuapp.com';
	console.log('CHANGING SERVER TO PRODUCTION');
}

exports.play = function(req, res) {
	res.render('play', { title: 'Play'});
};

let renderHome = function(req, res, responseBody) {
	let message;
	let defaultResponseBody = {
		metaTitle: 'Welcome to',
		metaSubtitle: 'Caliburn'
	};
	if (responseBody == null) {
		responseBody = defaultResponseBody;
	}
	res.render('index', {
		title: 'Home',
		post: responseBody,
		message: message
	});
};

module.exports.homepage_variables = function(req, res) {
	let requestOptions, path;
	path = '/api/news/metadata';
	requestOptions = {
		url: server + path,
		method: 'GET',
		json: {}
	};

	request(requestOptions, function(err, response, body) {
		renderHome(req, res, body);
	}); 	
};
