const bcrypt = require('bcrypt');

const hashing = async (req, res, next) => {

    bcrypt.hash(req.body.password, 5, function (err, hash) {
        if (err) {
            res.send(err);
        }
        else {
            req.body.password = hash;
            next();
        }
    });
}

module.exports =
{
    hashing
}
