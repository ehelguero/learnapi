module.exports = {
  index: function(req,res){
    res.render('image');
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
