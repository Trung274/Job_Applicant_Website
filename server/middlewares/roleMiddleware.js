const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireRole = (roles) => {
    return async (req, res, next) => {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Auth token is missing" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);

            if (!user || !roles.includes(user.role)) {
                return res.status(403).json({ message: "Access denied" });
            }

            req.user = user;
            next();
        } catch (error) {
            res.status(401).json({ message: "Invalid token" });
        }
    };
};

module.exports = requireRole;