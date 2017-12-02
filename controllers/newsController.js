let request = require('request');
let apiOptions = {
	server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://caliburn-web.herokuapp.com';
}

let renderNews = function(req, res, responseBody) {
	res.render('news', {
		title: 'News',
		post: responseBody
	});
	console.log('Response body: ' + responseBody.length);
};

module.exports.news_list = function(req, res) {
	let requestOptions, path;
	path = '/api/news';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {}
	};
	request(requestOptions, function(err, response, body) {
		renderNews(req, res, body);
		}
	); 
};

module.exports.addNewsPost = function(req, res) {

}