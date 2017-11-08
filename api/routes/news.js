let express = require('express');
let router = express.Router();
let ctrlNews = require('../controllers/news');

router.post('/news', ctrlNews.createNewsPost);
router.get('/news', ctrlNews.newsPostList);
router.get('/news/:newspostid', ctrlNews.newsPostReadOne);
router.put('/news/:newspostid', ctrlNews.newsPostUpdateOne);
router.delete('news/:newspostid', ctrlNews.newsPostDeleteOne);

module.exports = router;