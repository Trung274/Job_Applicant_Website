const Feature = require('../models/feature');

exports.createFeature = async (req, res) => {
    try {
        const feature = await Feature.create(req.body);
        res.status(201).json(feature);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create feature' });
    }
};

exports.getFeatures = async (req, res) => {
    try {
        const features = await Feature.find();
        res.json(features);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve features' });
    }
};

// Add other CRUD operations