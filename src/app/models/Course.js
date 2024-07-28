const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255, required: true, },
    description: { type: String },
    image: { type: String },
    slug: { type: String, required: true, unique: true },
    videoId: { type: String },
   
}, {
    timeseries: true,
});

module.exports = mongoose.model('Course', Course);
