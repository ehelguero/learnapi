// requerimos el cliente de mongo desde su modulo
var MongoClient = require('mongodb').MongoClient;

// configuracion mongodb
// si la bd myproject no existe se crea
var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

// sample data
var chapters = [
  {
    'Title': 'Snow',
    'Author': 'Neal'
  },
  {
    'Title': 'Joghn',
    'Author': 'Steve'
  }
];

MongoClient.connect(connectionUrl, function(err, db) {
  console.log('Connected');
})
