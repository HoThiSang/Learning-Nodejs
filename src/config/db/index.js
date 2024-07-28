const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            //  useNewUrlParser: true,
            //  useUnifiedTopology: true,
            //  useCreateIndex: true
        });
        console.log('Connected to successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

module.exports = { connect };
