const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const requireRole = require('../middlewares/roleMiddleware');

router.get('/:id', requireRole(['user', 'business', 'admin']), async (req, res) => {
    debugger
    try {
        const profile = await Profile.findById(req.params.id).populate('roleId').populate('savedJobs').populate('jobOpenings');
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/', requireRole(['user', 'business', 'admin']), async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create profile' });
    }
});

router.put('/:id', requireRole(['user', 'business', 'admin']), async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

//For CRUD operation
router.delete('/:id', requireRole(['admin']), async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete profile' });
    }
});

module.exports = router;

module.exports = router;