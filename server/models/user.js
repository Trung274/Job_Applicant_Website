const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'business', 'admin'],
        required: true
    },
    userProfile: {
        type: Object,
        default: {},
    },
    businessProfile: {
        type: Object,
        default: {},
    },
    adminProfile: {
        type: Object,
        default: {},
    }, 
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;