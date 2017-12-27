exports.index = function(req, res) {
	res.redirect('/news');
};

exports.play = function(req, res) {
	res.render('play', { title: 'Play'});
};
