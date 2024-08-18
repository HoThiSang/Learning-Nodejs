const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');
const { NULL } = require('node-sass');

class MeController {
    // [GET] /course/:slug
    storedCourses(req, res, next) {

        // res.json(res.locals._sort)
        let courseQuery =  Course.find({});
        
        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column] :  req.query.type
            });
        }

        Promise.all([courseQuery,  Course.countDocumentsDeleted() ])
            .then(([courses, deleteCount])=>
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
                }))
            .catch(next);
            
        // Course.countDocumentsDeleted()
        // .then((deleteCount)=> {
        //     console.log(deleteCount);
        // } )
        // .catch(next);

        // Course.find()
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }

    trashCourses(req, res, next) {
    
        Course.findDeleted()
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

//  khởi tạo một đối tượng SiteCOntroller
module.exports = new MeController();
