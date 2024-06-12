const Profile = require('../models/profile');
const Role = require('../models/role');
const Features = require('../models/feature');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Register Endpoint
const registerUser = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password, roleName, phone, city, avatar, background, description, languages, userTitle, profileLink, businessLink, address } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required'
            });
        }

        //Check if email was entered
        if (!email) {
            return res.json({
                error: 'Email is required'
            });
        }

        // Check if roleName was entered
        if (!roleName) {
            return res.status(400).json({
                error: 'Role name is required'
            });
        }

        //Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            });
        }

        // Check email
        const exist = await Profile.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        // Find the role based on roleName
        const role = await Role.findOne({ name: roleName });
        if (!role) {
            return res.status(400).json({ error: 'Invalid role' });
        }

        const hashedPassword = await hashPassword(password);

        // Create profile in database with all the fields
        const profile = await Profile.create({
            name,
            email,
            password: hashedPassword,
            roleId: role._id,
            phone,
            city,
            avatar,
            background,
            description,
            languages,
            userTitle,
            profileLink,
            businessLink,
            address
        });

        return res.json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if profile exists
        const profile = await Profile.findOne({ email })
            .populate({
                path: 'roleId',
                model: Role,
                populate: {
                    path: 'permissions',
                    model: Features
                }
            });
        if (!profile) {
            return res.json({
                error: 'No profile found'
            });
        }

        // Check if passwords match
        const match = await comparePassword(password, profile.password);
        if (match) {
            jwt.sign({ email: profile.email, id: profile._id, name: profile.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                return res.json({
                    message: 'Login Successfull',
                    accessToken: token,
                    profile,
                });
            });
        } else {
            res.json({
                error: "Passwords do not match"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to login user' });
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            console.log('vvvvvv')
            res.json(user);
        });
    } else {
        res.json(null);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getProfile
};