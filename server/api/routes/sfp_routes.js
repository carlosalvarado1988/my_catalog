'use strict';
module.exports = function(app) {
  var spf = require('../controllers/spf_controller')

  // spf Routes
  app.route('/api/v1/spf/create')
    .post(spf.generateNewSpf)

  app.route('/api/v1/spf/:spfId')
    .get(spf.getSpf)
    .put(spf.updateSpfDetails)
    // .delete(spf.deteleSpfDetailRow)
};
