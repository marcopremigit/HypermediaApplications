'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.event_serviceGET = function event_serviceGET (req, res, next, limit, id_event, id_service) {
  Events.event_serviceGET(limit, id_event, id_service)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters has been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};


module.exports.eventsEventIdGET = function eventsEventIdGET (req, res, next, eventId) {
  Events.eventsEventIdGET(eventId)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.eventsGET = function eventsGET (req, res, next, category, limit, offset) {
  Events.eventsGET(category, limit, offset)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};