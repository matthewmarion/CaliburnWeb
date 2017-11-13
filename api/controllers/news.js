let mongoose = require('mongoose');
let newsPosts = mongoose.model('NewsPost');

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.createNewsPost = function(req, res) {
    newsPosts.create({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    }, function(err, post) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, post);
        }
    });
};

module.exports.newsPostList = function(req, res) {
    let foundPosts = [];
    newsPosts.find({}, function(err, posts) {
        posts.forEach(function(post) {
            foundPosts.unshift(post)
        });
        sendJsonResponse(res, 200, foundPosts);
    }); 
};

module.exports.newsPostReadOne = function(req, res) {
    if (req.params && req.params.newspostid) {
        newsPosts.findById(req.params.newspostid).exec(function(err, post) {
            if (!post) {
                sendJsonResponse(res, 404, {
                    'message': 'newspostid not found'
                });
                return;
            }
            if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, post);
        });
    } else {
        sendJsonResponse(res, 404, {
            'message': 'No newspostid in request'
        });
    }
};

module.exports.newsPostUpdateOne = function(req, res) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.newsPostDeleteOne = function(req, res) {
    sendJsonResponse(res, 200, {'status': 'success'});
};