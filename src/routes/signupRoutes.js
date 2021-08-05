const express = require('express');
const signupRouter = express.Router();
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser'); // Middleware
function router(nav){
    signupRouter.get('/' ,function(req,res){
        res.render('signup',{
            success: req.session.success,
            errors: req.session.errors,
            nav,
            title:'Library'
        })
    })
    signupRouter.get('/signup',function(req,res)
    {
   
    return signupRouter;
   

})
module.exports = router;

    
