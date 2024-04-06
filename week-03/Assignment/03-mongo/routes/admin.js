const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
        res.status(409).json({ msg: "User already exist" });
        return;
    }

    const newAdmin = await Admin.create({
        username,
        password
    })
    res.status(201).json({ msg: 'Admin created successfully', data: newAdmin })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, imageLink, price } = req.body;

    const course = await Course.findOne({ title });
    if (course) {
        res.status(409).json({ msg: "Course with this title already exist" });
        return;
    } else if (!title || !price) {
        res.status(401).json({ msg: "Course title or price can't be empty" });
        return;
    }

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.status(201).json({ msg: 'Course created successfully', courseId: newCourse.id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find({}, {_id:0, __v:0});

    if (!allCourses) {
        res.status(200).json({ msg: 'No courses present at the moment' });
        return;
    }
    return res.json({ msg: 'success', data: allCourses })
});

module.exports = router;