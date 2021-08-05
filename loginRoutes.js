const express = require('express');
const loginRouter = express.Router();

const bodyParser = require('body-parser'); // Middleware
function router(nav){
    loginRouter.get('/' ,function(req,res){
        res.render('login',{
            nav,
            title:'Library'
        })
    })
    loginRouter.get('/signin',function(req,res)
    {
        let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);

    })
    return loginRouter;

}
module.exports = router;





