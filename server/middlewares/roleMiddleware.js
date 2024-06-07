const jwt = require('jsonwebtoken');
const Profile = require('../models/profile');

const requireRole = (roles) => {
    return async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Auth token is missing" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const profile = await Profile.findById(decoded.id).populate('roleId');

            if (!profile || !roles.includes(profile.roleId.name)) {
                return res.status(403).json({ message: "Access denied" });
            }

            req.profile = profile;
            next();
        } catch (error) {
            res.status(401).json({ message: "Invalid token" });
        }
    };
};

module.exports = requireRole;