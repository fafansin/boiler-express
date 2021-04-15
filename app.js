const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', (req,res) =>{
    res.render('home');
})

app.get('*', (req, res) =>{
    res.render('404');
})

app.listen(3000, ()=>{
    console.log('Application loaded at port 3000');
})