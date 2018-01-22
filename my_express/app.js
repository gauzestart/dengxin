var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
const mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
//var jade = require('jade');
//var fs = require('fs');
var mongodb = require("mongodb");
var app = express();

mongoose.connect('mongodb://localhost/Project');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});  
var db = new mongodb.Db("Project",server,{safe:false});
//打开数据库连接
db.open(function(err,db){  
    if(err){  
        console.log(err);  
        return false;  
    }
    else
        console.log('connect!');
});
//连接到collection
//var link = function(db){
//  return function(req,res){
//  db.commodities('usercommodities', {safe:true}, function(err, commodities){
//  /*collection方法用于连接现有表，{safe:true} 选项，当collection不存在的时候报错
//  createCollection方法用于创建新表，{safe:true} 选项，当collection存在的时候报错
//  */
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log('get collection!');
//       commodities.find().toArray(function(err,docs){
//       console.log('find');
//       res.render('userlist',{userlist:docs});
//       });
//   }
//  });
//  }
//}
//app.get('/',link(db));
/*关于路由link方法的位置，合适的做法是放在routes/index文件里面，但方法里的依赖项太多,所以还是塞到了一个文件里

*/

//var list = function(){console.log('hah');}
//var port = 8080;
//app.listen(port);
//console.log('Listening on port ' + port);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	resave: true, 
	saveUninitialized: false,
	secret: 'Project' 
}))
app.use(session({
  resave: true, 
  saveUninitialized: false,
  secret: 'commodity' 
}));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
