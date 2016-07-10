var express = require('express');
config = require('./server/configure')
var app = express();

// Configure app
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

// Pass app to function config
app = config(app);

app.listen(app.get('port'), function(){
  console.log('Server listening to port http://localhost:' + app.get('port'))
})
