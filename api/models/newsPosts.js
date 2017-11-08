var mongoose = require('mongoose');

let newsPostSchema = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
}); 

mongoose.model('NewsPost', newsPostSchema);