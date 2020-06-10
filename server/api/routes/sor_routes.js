'use strict';
module.exports = function(app) {
  var sor = require('../controllers/sor_controller')

  // spf Routes
  app.route('/api/v1/sor/create')
    .post(sor.generateSor)

  app.route('/api/v1/sor/:sorId')
    .get(sor.getSor)
  //   .put(spf.updateSpfDetails)
    // .delete(spf.deteleSpfDetailRow)
};
