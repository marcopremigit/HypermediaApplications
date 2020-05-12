'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.jobsGET = function jobsGET (req, res, next) {
  Jobs.jobsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsJobIdGET = function jobsJobIdGET (req, res, next) {
  var jobId = req.swagger.params['jobId'].value;
  Jobs.jobsJobIdGET(jobId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
