const Profile = require('../models/profile');
const Role = require('../models/role');
const Features = require('../models/feature');
const { verifyAccessToken } = require('../helpers/auth');

exports.createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create profile' });
    }
};


// API endpoint to get profile
exports.getProfiles = async (req, res) => {
    const authorization = req.headers.authorization;

    // Check for access token (Optional, for JWT)
    if (authorization && authorization.startsWith('Bearer ')) {
        const token = authorization.split(' ')[1];
        const userId = verifyAccessToken(token);
        if (!userId) {
            return res.status(401).json({ message: 'Invalid access token' });
        }

        // Find user by ID or other criteria based on verified userId
        try {
            const user = await Profile.findById(userId).populate({
                path: 'roleId',
                model: Role,
                populate: {
                    path: 'permissions',
                    model: Features
                }
            });;
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user); // Return user profile data
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        // No access token provided (or not using JWT)
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
