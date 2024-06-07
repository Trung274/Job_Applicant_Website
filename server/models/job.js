const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: String,
    description: String,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    location: String,
    businessLogoUrl: String,
    salary: String,
    employmentType: [String],
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);