module.exports = {
  index: function(req,res){
    res.send('The image: index controller' + req.params.image_id);
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
