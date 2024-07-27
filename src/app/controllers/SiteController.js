const Course =  require('../models/Course');

// app.js
class SiteController {
    
    // home(req, res) {
    //     Course.find({}, function(err, course) {
    //         if (!err){
    //             res.json(course);
    //         }else{
    //             res.status(400).json({ error : 'Error' });

    //         }
            
         
    //         // res.render('home', { course: course });
    //     })
    //     // res.render('home');
    // }

    async home(req, res) {
        try {
            const course = await Course.find({});
          
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
    
    search(req, res) {
        res.render('search');
    }
}

//  khởi tạo một đối tượng SiteCOntroller
module.exports = new SiteController();
