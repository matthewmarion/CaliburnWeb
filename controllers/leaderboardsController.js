exports.leaderboards_list = function(req, res) {
	res.render('leaderboards/leaderboards', { title: 'Leaderboards'});
};

exports.leaderboards_details = function(req, res) {
	res.send('INCOMPLETE - Leaderboards Stat Type: ' + req.params.statType);
};
