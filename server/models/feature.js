const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Feature', featureSchema);