const express = require('express');
const router = express.Router();
const cors = require('cors');
const profileController = require("../controllers/profileController");

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get("/getProfiles", (req, res) => {profileController.getProfiles(req, res);});

module.exports = router;