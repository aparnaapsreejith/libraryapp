const express = require('express');
const signupRouter = express.Router();

const bodyParser = require('body-parser'); // Middleware
function router(nav){
    signupRouter.get('/' ,function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        })
    })
    signupRouter.get('/signup',function(req,res)
    {
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.owneremail;
        let phone = req.body.phone;
        res.send(`Username: ${username} Password: ${password}`);
      
          })
    return signupRouter;

}
module.exports = router;