//'use strict';

var mongoose = require('mongoose'),
  annonceAchat = mongoose.model('AnnonceAchats');



exports.list_all_annonceAchat = function(req, res) {
  annonceAchat.find({}, function(err, annonceAchat) {
    if (err)
      res.send(err);
    res.json(annonceAchat);
  });
};


exports.create_annonceAchat = function(req, res) {
  var new_annonceAchat = new annonceAchat(req.body);
  new_annonceAchat.save(function(err, annonceAchat) {
    if (err){
      console.log(err.message);
      res.send(err);
    }
    res.json(annonceAchat);
  });
};

exports.read_annonceAchat = function(req, res) {
  annonceAchat.findById(req.params.annonceAchatId, function(err, annonceAchat) {
    if (err)
      res.send(err);
    res.json(annonceAchat);
  });
};

exports.update_annonceAchat = function(req, res) {
  annonceAchat.findOneAndUpdate({_id:req.params.annonceAchatId}, req.body, {new: true}, function(err, annonceAchat) {
    if (err)
      res.send(err);
    res.json(annonceAchat);
  });
};
// annonceAchat.remove({}).exec(function(){});
exports.delete_annonceAchat = function(req, res) {

  annonceAchat.remove({
    _id: req.params.annonceAchatId
  }, function(err, annonceAchat) {
    if (err)
      res.send(err);
    res.json({ message: 'annonceAchat successfully deleted' });
  });
};
