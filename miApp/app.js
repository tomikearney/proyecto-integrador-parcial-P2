var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*Creamos variable session */
let session = require ('express-session');

/*Importamos modulos de ruteo propios */
var indexRouter = require('./routes/index');
var postRouter = require('./routes/posts');
var usuarioRouter = require('./routes/users')

/*Requiero los modelos de base de datos */
const data = require('./database/models');

/*Funcion de alto nivel */
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Recursos Estaticos:  guardados en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


/*Ejecuto session por arriba de rutas */
app.use(session({
  secret:'Secret Message',
  resave:false,
  saveUninitialized:true
}));

/*Paso la informacio a vistas */
app.use(function (req,res,next) {
  if(req.session.user != undefined){  //user tiene todos los datos del usuario esta en indexController store
    res.locals.user = req.session.user;
    //locals ayuda a q se vea en view
    return next();
  } 
  return next()
}) //Asignamos un usuario a session en controller

/*Configuración de Cookie */
app.use((req,res,next)=>{
  if (req.cookies.UserId != undefined && req.session.user == undefined) {
    let idUsuarioCookie = req.cookies.UserId;

    data.Usuario.findByPk(idUsuarioCookie)
    .then (function (user) {
      req.session.user = user.dataValues;

      res.locals.user = user.dataValues;
    
      return next()
    })
    .catch((error)=>{
      return console.log(error);
    })
  } else {
    return next();
  }
});



/*PREFIJOS */
app.use('/', indexRouter);
app.use('/posts', postRouter); /*CAMBIE A POSTS CON S */
app.use('/users', usuarioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*EXPORTAMOS */
module.exports = app;
