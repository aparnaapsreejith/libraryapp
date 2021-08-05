const express = require('express');
const booksRouter = express.Router();
function router(nav){
  var books =[
    {
     title:'tom and jerry' ,
     author: 'joseph barbera' ,
     genre: 'cartoon',
     img:"tomandjerry"
    },
    {
        title:'harry potter' ,
        author: 'jk rowlin' ,
        genre: 'fantasy',
        img: 'harry'
       },
       {
        title:'pathummayude adu' ,
        author: 'basheer' ,
        genre: 'drama',
        img:'pathu'
       },
       {
        title:'The god of small things' ,
        author: 'Arunthathi roy' ,
        genre: 'Fiction',
        img:'darwin'
       }
]
booksRouter.get('/',function(req,res){
    res.render("books",
    {
      nav, 
      title:'library',
      books
    });
});
booksRouter.get('/:id', function(req,res){
const id = req.params.id
res.render('book',{
nav,
title:'library',
      book:books[id]
      


});
});
 return booksRouter;
}

module.exports = router;

