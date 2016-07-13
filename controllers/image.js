var fs = require('fs'),
    path = require('path');

module.exports = {
  index: function(req,res){
    var viewModel = {
      image: {
        uniqueId: 1,
        title: 'Sample 1',
        description: '',
        filename: 'sample1.jpg',
        views: 0,
        likes: 0,
        timestamp: Date.now()
      },
      comments: [
        {
          image_id: 1,
          email: 'test@testing.com',
          name: 'Test Tester',
          gravatar: 'http://lorempixel.com/75/75/animals/1',
          comment: 'This is a test comment...',
          timestamp: Date.now()
        },
        {
          image_id: 1,
          email: 'test@testing.com',
          name: 'Test Tester',
          gravatar: 'http://lorempixel.com/75/75/animals/1',
          comment: 'This is a test comment...',
          timestamp: Date.now()
        }
      ]
    };
    res.render('image', viewModel);
  },
  create: function(req,res){
    console.log(req.file)
    // function to upload an image
    var saveImage = function(){
      // characters for generate filename
      var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
          imgUrl = '';
      // generate random name
      for(var i=0;i<6;i++){
        imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      // get file temp path, extension and target
      var tempPath = req.file.path,
          ext = path.extname(req.file.originalname).toLowerCase(),
          targetPath = path.resolve('./public/upload/' + imgUrl + ext);
          
      if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        fs.rename(tempPath, targetPath, function(err) {
          if(err) throw err;
          // redirect to the page with the image
          res.redirect('/images/' + imgUrl);
        })
      } else {
        // delete image temp
        fs.unlink(tempPath, function(err) {
          if (err) throw err;
          // send info 500
          res.status(500).json({error: 'Only image files are allowed.'});
        });
      }
    };
    saveImage();
  },
  like: function(req,res){
    res.send('Hola');
  },
  comment: function(req,res){
    res.send('Chau');
  }
};
