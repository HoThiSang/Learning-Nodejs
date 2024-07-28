const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /course/:slug
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

//  khởi tạo một đối tượng SiteCOntroller
module.exports = new MeController();
