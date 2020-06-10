'use strict';
module.exports = function(app) {
  var assets = require('../controllers/assets_controller')

  // assets Routes
  app.route('/api/v1/assets/company_names')
    .get(assets.getCompanyList)
};
