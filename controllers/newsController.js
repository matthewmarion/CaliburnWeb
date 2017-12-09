let request = require('request');

if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://caliburn-web.herokuapp.com';
}

let renderNews = function(req, res, responseBody) {
	let message;
	if (!(responseBody instanceof Array)) {
		message = "API lookup error";
		responseBody = [];
	}
	if (!responseBody.length) {
		message = "Sorry! No news posts could be found.";
	}
	res.render('news', {
		title: 'News',
		post: responseBody,
		message: message
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
	let requestOptions, path, newspostid, postdata;
	newspostid = req.params.newspostid;
	path = "/api/news";
	postdata = {
		url: req.body.url,
		author: req.body.name,
		title: req.body.title,
		content: req.body.selftext
	};

	requestOptions = {
		url: apiOptions.server + path,
		method: "POST",
		json: postdata
	};

	request(requestOptions, function(err, response, body) {
		if (response.statusCode != 201) {
			_showError(req, res, response.statusCode);
			return;
		}
		res.redirect('/news');
	})
}