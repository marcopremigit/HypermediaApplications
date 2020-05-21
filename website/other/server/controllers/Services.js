'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.servicesGET = function servicesGET (req, res, next, category, limit, offset) {
  Services.servicesGET(category, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesServiceIdGET = function servicesServiceIdGET (req, res, next, serviceId) {
  Services.servicesServiceIdGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};