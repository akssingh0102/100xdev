const { User } = require("../db");

async function userMiddleware(req, res, next) {
    const { username, password } = req.headers;

    const user = await User.findOne({
        username,
        password,
    });

    if (!user) {
        res.status(403).json({
            msg: "User doesn't exist"
        })
    }
    next();
}

module.exports = userMiddleware;