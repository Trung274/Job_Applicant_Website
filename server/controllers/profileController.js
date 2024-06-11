const Profile = require('../models/profile');
const Role = require('../models/role');

exports.createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create profile' });
    }
};

exports.getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find().populate({path:'roleId', model: Role });
        debugger
        console.log('xxxxx')
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve profiles' });
    }
};

// Add other CRUD operations 