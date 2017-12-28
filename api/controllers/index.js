let mongoose = require('mongoose');
let newsPosts = mongoose.model('NewsPost');

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.newsPostMetadata = function(req, res) {
    newsPosts.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, post) {
        sendJsonResponse(res, 200, post);
    });
};