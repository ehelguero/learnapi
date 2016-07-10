var express = require('express');
config = require('./server/configure')
var app = express();

// Configure app
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

// Pass app to function config
app = config(app);

// Configure main route
app.get('/', function(req,res){
  res.send('Hello World');
});

app.listen(app.get('port'), function(){
  console.log('Server listening to port http://localhost:' + app.get('port'))
})
