const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

//  khởi tạo một đối tượng SiteCOntroller
module.exports = new SiteController();
