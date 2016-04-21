var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Video Model
 */
var Video = new keystone.List('Video');

Video.add({
  title: {type: Types.Name},
  path: {
    type: Types.LocalFile,
    dest: keystone.get('module root') + '/public/uploads/videos'
  },
  created_at: {type: Types.Date}
});

// Provide access to Keystone
Video.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});

// Registration
Video.defaultColumns = 'title, path, created_at';
Video.register();
