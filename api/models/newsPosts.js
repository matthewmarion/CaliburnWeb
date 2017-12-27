var mongoose = require('mongoose');

let newsPostSchema = new mongoose.Schema({
    url: {type: String, required: false},
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    metaTitle: {type: String, required: true},
    metaSubtitle: {type: String, required: true}
});

mongoose.model('NewsPost', newsPostSchema);
