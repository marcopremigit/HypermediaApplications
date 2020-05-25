'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.jobsGET = function jobsGET (req, res, next, limit, offset) {
  Jobs.jobsGET(limit, offset)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.jobsJobIdGET = function jobsJobIdGET (req, res, next, jobId) {
  Jobs.jobsJobIdGET(jobId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
