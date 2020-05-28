'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.servicesGET = function servicesGET (req, res, next, category, limit, offset) {
  Services.servicesGET(category, limit, offset)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters has been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.servicesServiceIdGET = function servicesServiceIdGET (req, res, next, serviceId) {
  if(typeof serviceId !== 'number') {
    utils.writeJson(res, utils.respondWithCode(400, `ID was not input as a number`));
    return;
  }
  Services.servicesServiceIdGET(serviceId)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters has been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};