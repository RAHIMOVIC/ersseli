//'use strict';

module.exports = function(app) {
	var annonceAchat = require('../controllers/annonceAchatController');

	// annonceAchat Routes
	app.route('/annonceAchat')
		.get(annonceAchat.list_all_annonceAchat)
		.post(annonceAchat.create_annonceAchat);

	app.route('/annonceAchat/:annonceAchatId')
		.get(annonceAchat.read_annonceAchat)
		.put(annonceAchat.update_annonceAchat)
		.delete(annonceAchat.delete_annonceAchat);
};
