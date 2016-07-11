// Require all middleware
var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment');

module.exports = function(app) {
  // responsible for logging
  app.use(morgan('dev'));

  // facilitate packing form fields via req.body
  app.use(bodyParser.urlencoded({'extended': true}));
  app.use(bodyParser.json());

  // fakes REST HTTP verbs for older browsers
  app.use(methodOverride());

  // allows cookie to be sent and recieved
  app.use(cookieParser('learnapi'));

  routes(app);
  app.use('/public/', express.static(path.join(__dirname, '../public')));

  if('development' === app.get('env')) {
    app.use(errorHandler());
  }

  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts',
    partialsDir: [app.get('views') + '/partials'],
    helpers: {
      timeago: function(timestamp) {
        return moment(timestamp).starOf('minute').fromNow();
      }
    }
  }).engine);
  app.set('view engine', 'handlebars');

  return app;
};
