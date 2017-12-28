var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/indexController');
var news_controller = require('../controllers/newsController');
var leaderboards_controller = require('../controllers/leaderboardsController');
var support_contrller = require('../controllers/supportController');

router.get('/', index_controller.homepage_variables);

router.get('/news', news_controller.news_list);

router.get('/play', index_controller.play);

router.get('/leaderboards', leaderboards_controller.leaderboards_list);
router.get('/leaderboards/:statType', leaderboards_controller.leaderboards_details);

router.get('/support', support_contrller.support_list);

module.exports = router;
