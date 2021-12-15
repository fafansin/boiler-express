const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const AppError = require('./AppError');

dotenv.config();
  
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', (req,res) =>{
    // res.render('home');
    throw new AppError('Taena this', 401);
})

app.get('*', (req, res) =>{
    res.render('404');
})

app.use((err, req, res, next)=>{
    const { status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})