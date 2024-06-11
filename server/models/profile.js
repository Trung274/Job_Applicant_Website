const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    background: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    languages: {
        type: [String],
        default: []
    },
    userTitle: {
        type: [String],
        default: []
    },
    profileLink: {
        linkedin: {
            type: String,
            default: ''
        },
        facebook: {
            type: String,
            default: ''
        }
    },
    savedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        default: []
    }],
    businessLink: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    jobOpenings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        default: []
    }]
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;