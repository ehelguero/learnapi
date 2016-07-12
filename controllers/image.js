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
    res.send('Create');
  },
  like: function(req,res){
    res.send('Hola');
  },
  comment: function(req,res){
    res.send('Chau');
  }
};
