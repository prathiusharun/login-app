var express = require('express');
var router = express.Router();
var url = require ('url');
var adr = 'http://localhost:3000/route/homepage';
var q = url.parse(adr,true);


const credential = {
    email: "admin@gmail.com",
    password:"admin123"
}

//login user
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
       // res.redirect('/dashboard');
       res.end("Login successful..!");
    }else{
        res.end("Invalid username or password");

    }
});
module.exports = router;