/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

var fs = require('fs');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Global data
sixteen_nine_filenames = fs.readdirSync(keystone.get('module root') + '/public/images/random_photos_from_social_sites/sixteen-nine/');
one_one_filenames = fs.readdirSync(keystone.get('module root') + '/public/images/random_photos_from_social_sites/one-one/');

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
  app.get('/about', routes.views.about);
  app.get('/donate', routes.views.donate);
  app.get('/programs', routes.views.programs);
  app.get('/testimonials', routes.views.testimonials);
  app.get('/success', routes.views.success);
  app.post('/newsletter/subscribe', function (req, res, next) {
    // Save email addresses to a text file
    fs.appendFile('subscriber_email_addresses.txt', req.body.email_address + '\r\n');
    res.redirect(req.header('Referer') || '/');
  });

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
