//'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const assert = require('assert');
var annonceAchatSchema = new Schema({
  objet: {
    type: String
    //Required: [ function() { return this.objet!=undefined; },
     // 'Le champ objet est obligatoir' ]
  },
  volume: {
    type: [{
      type: String,
      enum: ['Petit', 'Moyen', 'Grand', 'Très Grand']
    }],
    default: ['Petit']
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

annonceAchatSchema.path('objet').required(true, 'champ obligatoire');

// or make a path conditionally required based on a function
/*var isOver18 = function() { return this.age <= 18; };
Schema.path('voterRegistrationId').required(isOver18);*/

/*[ function() { return false; },
  'Le champ objet est obligatoir' ] */
/*var error = annonceAchatSchema.validateSync();
assert.ok(false,'Champ objet obligatoir'); */
/*function hasvalue(doc)
{
  
  assert.ok(doc.objet !=undefined,'Le champ objet est obligatoir3');
}*/

/*
annonceAchatSchema.pre('save', function (next) {
  var annonceAchat = this;
  assert.notEqual(annonceAchat.objet ,undefined,'Le champ objet est obligatoir2');
  /*if(annonceAchat.objet ==undefined)
  { 
    console.log("vide3");
    next( new Error("error le champs objet est obligatoire "));
  }*/
  //assert.ok(annonceAchat.objet !=undefined,'Le champ objet est obligatoir');
  

 // next();

//});
module.exports = mongoose.model('AnnonceAchats', annonceAchatSchema);