require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        let decoded = jwt.verify(token, process.env.privatekey);
        if (decoded) {
            const userId = decoded.userid;
            req.body.userId = userId;
            next();
        }
        else {
            res.send('Login First!')
        }
    }
    else {
        res.send('Login First!')
    }
}

module.exports = {
    auth
}