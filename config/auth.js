module.exports = {
    ensureAuthenticated : function(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg' , 'please login to view this resource');
        res.redirect('/users/login');
    },

    asAuthenticated : function(req,res,next) {
        console.log("da")
        if(!req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg' , 'already logged in');
        // res.render('dashboard',{
        //     user: req.user
        // });
        res.redirect('/dashboard');

    }

}