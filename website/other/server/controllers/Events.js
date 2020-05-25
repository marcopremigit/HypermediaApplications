'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.event_serviceGET = function event_serviceGET (req, res, next, limit, id_event, id_service) {
  Events.event_serviceGET(limit, id_event, id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.eventsEventIdGET = function eventsEventIdGET (req, res, next, eventId) {
  Events.eventsEventIdGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next, category, limit, offset) {
  Events.eventsGET(category, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};