const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.log(`We on port ${PORT}`)
});

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(logger('div'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))

app.get('/', (req,res) => {
  res.render('index.ejs')
})

const todoRoutes = require('./routes/todo-routes.js');
app.use('/todo', todoRoutes);

app.use('*', (req,res) => {
  res.status(400).send('Not Found')
})
