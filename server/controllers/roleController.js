const Role = require('../models/role');

exports.createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create role' });
    }
};

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find().populate('permissions');
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve roles' });
    }
};

// Add other CRUD operations as needed