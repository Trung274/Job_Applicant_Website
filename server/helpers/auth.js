const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

const verifyAccessToken = (token) => {
    if (!token) {
        return false;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
        return decoded.id; // Extract user ID from decoded token
    } catch (err) {
        console.error('Invalid access token:', err);
        return false;
    }
};

module.exports = {
    hashPassword,
    comparePassword,
    verifyAccessToken
}