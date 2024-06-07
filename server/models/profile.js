const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    phone: Number,
    city: String,
    avatar: String,
    background: String,
    description: String,
    languages: [String],
    userTitle: [String],
    profileLink: {
        linkedin: String,
        facebook: String
    },
    savedJobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }],
    businessLink: String,
    address: String,
    jobOpenings: [{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }]
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;