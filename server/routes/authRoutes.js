const express = require('express');
const router = express.Router();
const cors = require('cors');
const authController = require("../controllers/authController");
// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.post("/register", (req, res) => {authController.registerUser(req, res);});
router.post("/login", (req, res) => {authController.loginUser(req, res);});

module.exports = router;