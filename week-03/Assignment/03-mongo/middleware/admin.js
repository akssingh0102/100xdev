const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;

    const admin = await Admin.findOne({
        username,
        password,
    });

    if (!admin) {
        res.status(403).json({
            msg: "User doesn't exist"
        })
    }
    next();
}

module.exports = adminMiddleware;
