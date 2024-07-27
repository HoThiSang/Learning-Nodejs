class  SiteController {
    
    home(req, res){
        res.render('home');
    }

    search(req, res){
        res.render('search');
    }
}

//  khởi tạo một đối tượng SiteCOntroller 
module.exports = new SiteController();
