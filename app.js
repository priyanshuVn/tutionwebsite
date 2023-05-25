const http = require('http');
const fs = require('fs');
const express = require('express');
// const bodyparser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/ContactDetail');
const path = require('path');

const app = express();
const port = 800;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// var contactSchema = new mongoose.Schema({

//     name:String,
//     email:String,
//     mobile:String,
//     address:String
// }
// );
// const contactDetail = mongoose.model('contactDetail',contactSchema);

app.get('/',(req,res)=>{

    res.render('index.pug');
});
app.get('/course',(req,res)=>{

    res.render('Courses.pug');
});
app.get('/Contact',(req,res)=>{

    res.status(202).render('contact.pug');
});

app.listen(port,()=>{

     console.log("Successfully ported on 80");
})