'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.eventsBookSpotEventIdPUT = function eventsBookSpotEventIdPUT (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Events.eventsBookSpotEventIdPUT(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEventIdGET = function eventsEventIdGET (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Events.eventsEventIdGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  Events.eventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
