const express = require('express');
const app = new express();
const port = process.env.PORT || 4334;
const nav = [
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  },
  {
    link:'/admin',name:'AddBook'
  },
  {
    link:'/login',name:'SignIn'
  },
  {
    link:'/signup',name:'SignUp'
  }
  ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
app.use(express.static('./public'));
app.set( 'view engine', 'ejs');
app.set('views' ,  './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/signup', signupRouter);
app.get('/',function(req,res){
    res.render("index",
    {
     nav,
      title:'library'
    }); });
    

app.listen(port,()=>{console.log("Server is ready at" +port)});

