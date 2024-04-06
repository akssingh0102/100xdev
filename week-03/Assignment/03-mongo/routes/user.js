const { Router, json } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
        res.status(409).json({ msg: "User already exist" });
        return;
    }

    const newUser = await User.create({
        username,
        password,
    });

    res.status(201).json({
        msg: "User created successfully",
        newUser,
    });
});

router.get("/courses", async (req, res) => {
    const allCourses = await Course.find({}, { __v: 0 });

    if (!allCourses) {
        res.status(200).json({ msg: "No courses present at the moment" });
        return;
    }
    return res.json({ msg: "success", data: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    const { username, password } = req.headers;

    const user = await User.updateOne(
        { username, password },
        { $push: { purchasedCourses: courseId } }
    );
    return res.json({ msg: "success", user });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const { username, password } = req.headers;

    const user = await User.findOne({ username, password });
    if (!user) {
        res.status(409).json({ msg: "User doesn't exist" });
        return;
    }

    const purchasedCourses = user.purchasedCourses;
    const courses = await Course.find({
        _id: { $in: purchasedCourses },
    });

    res.status(200).json({
        msg: "success",
        data: courses,
    });
});

module.exports = router;
