const Job = require('../models/job');

exports.createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create job' });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('business');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve jobs' });
    }
};

// Add other CRUD operations as needed