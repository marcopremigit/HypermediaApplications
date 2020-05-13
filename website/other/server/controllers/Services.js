'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.event_serviceGET = function event_serviceGET (req, res, next, limit, id_event, id_service) {
  Services.event_serviceGET(limit, id_event, id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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

module.exports.volunteer_serviceGET = function volunteer_serviceGET (req, res, next, limit, id_volunteer, id_service) {
  Services.volunteer_serviceGET(limit, id_volunteer, id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
