var express = require('express');
var handlebars = require('handlebars');
var exphbs  = require('express-handlebars');
var winston = require('winston');
var expressWinston = require('express-winston');

var app = express();
var router = express.Router();

var hbs = exphbs.create({extname:'hbs', defaultLayout:'main.hbs', handlebars:handlebars});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
  meta: true,                 // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true,        // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false,            // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  var context = {page: 'index'};
  res.render('index', context);
});

router.get('/features',function(req,res){
  var context = {page: 'features'};
  res.render('features', context);
});

router.get('/about',function(req,res){
  var context = {page: 'about'};
  res.render('about', context);
});

app.use(express.static('assets'));

app.use('/',router);

app.use('*',function(req,res){
  res.render('404');
});

app.listen(8080,function(){
  console.log('docker_node_app running at port :8080');
});

handlebars.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});