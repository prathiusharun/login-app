const express = require('express');
const path = require ('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} =require('uuid');

const router =  require('./router');
const { Script } = require('vm');



const app = express();

const port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');


//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/public/assets',express.static(path.join(__dirname,'public/assets')));






app.use(session({
   secret:uuidv4(),
   resave:false,
   saveUninitialized:true
}));

app.use('/route', router);

//home route

app.get('/',(req,res)=>{
   res.render('base',{ title: "Login System" });
   //res.send('hello');

})

/*
app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/views/index.ejs');
});
*/
/*
app.get('/home', (req, res) => {
   res.render('/index', { title: 'Home Page' });
});

*/


/*
app.post('/login', (req,res) =>{
   if(user){
      res.redirect('/')
   }else{
      res.redirect('login');
   }
})
*/
/*
app.get('/', (req, res) => {
   res.render('home', { title: 'Home Page' });
});

*/
/*
app.get('/', (req,res) =>{
   if(req.session.user){
      res.render('index')
     //res.render('/');
   }else{
      res.redirect('/login');
   }
})
*/
app.get('/login', (req, res) => {
   res.render('index', { title: 'Home Page' });
});


app.listen(port, ()=>{console.log("Listening to the server on http://localhost:3000");
});