const express = require('express');
const authorRouter = express.Router();
function router(nav){
    authorRouter.get('/' ,function(req,res){
        res.render('author',{
            nav,
            title:'Library'
        })
    })
    authorRouter.get('/authors',function(req,res)
    {
        res.send("hey ");
    })
    return authorRouter;

}
module.exports = router;

