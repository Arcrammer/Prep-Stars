var keystone = require('keystone');
var fs = require('fs');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
  locals.section = 'home';

  sixteen_nine_filenames = fs.readdirSync(keystone.get('module root') + '/public/images/random_photos_from_social_sites/sixteen-nine/');
  one_one_filenames = fs.readdirSync(keystone.get('module root') + '/public/images/random_photos_from_social_sites/one-one/')

	// Render the view
	view.render('index');
};
