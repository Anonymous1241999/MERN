const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    heading: {
        type: String,
    },
    blog: {
        type: String,
    },
    userid: {
        type: String,
    }
});


const blog = mongoose.model('blog',blogSchema);

module.exports = blog;