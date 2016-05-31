var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
	// item in the header navigation.
  locals.section = 'programs';

  // Render the view
  // view.render('programs');
  res.redirect(req.header('Referer') || '/');
}
