const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then(course=> {
            res.render('courses/show', {
                course: muongooseToObject(course)
            });
        })
        .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        var formData = req.body;
        formData.image = `https://www.youtube.com/watch?v=${req.body.videoId}`
        const course = new Course(formData);
        course.save()
        .then(() => res.redirect('/'))
        .catch(next);
    }

    edit(req, res, next) {
        Course.findById( req.params.id )
        .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
       .catch(next)
    }

    update(req, res, next) {
        Course.updateOne( { _id: req.params.id }, req.body )
        .then(course => res.redirect('/me/stored/courses'))
       .catch(next)
    }

}

//  khởi tạo một đối tượng SiteCOntroller
module.exports = new CourseController();
