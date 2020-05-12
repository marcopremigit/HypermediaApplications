'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.servicesGET = function servicesGET (req, res, next) {
  Services.servicesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesServiceIdGET = function servicesServiceIdGET (req, res, next) {
  var serviceId = req.swagger.params['serviceId'].value;
  Services.servicesServiceIdGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
