module.exports = {
  newest: function() {
    var comments = [
      {
        image_id: 1,
        email: 'a@a.com',
        name: 'Test',
        gravatar: 'http://lorempixel.com/75/75/animals/1',
        comment:   'This is a test comment...',
        timestamp:  Date.now(),
        image: {
          uniqueId: 1,
           title: 'sAMPLE',
           description: 'A',
           filename: 'sample1.jpg',
           views: 0,
           likes: 0,
           timestamp: Date.now(),
        }
      },
        {
          image_id: 1,
          email: 'a@a.com',
          name: 'Test',
          gravatar: 'http://lorempixel.com/75/75/animals/1',
          comment:   'This is a test comment...',
          timestamp:  Date.now(),
          image: {
            uniqueId: 1,
             title: 'sAMPLE',
             description: 'A',
             filename: 'sample1.jpg',
             views: 0,
             likes: 0,
             timestamp: Date.now(),
          }
        },
    ];

    return comments;
  }
}
