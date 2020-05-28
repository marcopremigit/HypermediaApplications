'use strict';

var utils = require('../utils/writer.js');
var Volunteers = require('../service/VolunteersService');

module.exports.volunteer_eventGET = function volunteer_eventGET (req, res, next, limit, id_event, id_volunteer) {
  Volunteers.volunteer_eventGET(limit, id_event, id_volunteer)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.volunteer_serviceGET = function volunteer_serviceGET (req, res, next, limit, id_volunteer, id_service) {
  Volunteers.volunteer_serviceGET(limit, id_volunteer, id_service)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.volunteersGET = function volunteersGET (req, res, next, category, limit, offset) {
  Volunteers.volunteersGET(category, limit, offset)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};

module.exports.volunteersVolunteerIdGET = function volunteersVolunteerIdGET (req, res, next, volunteerId) {
  if(!parseInt(volunteerId)) {
    utils.writeJson(res, utils.respondWithCode(400, `ID was not input as a number`));
    return;
  }
  Volunteers.volunteersVolunteerIdGET(volunteerId)
    .then(function (response) {
      if(Object.keys(response).length === 0) utils.writeJson(res, utils.respondWithCode(404, 'No Entities with specified parameters have been found'));
      else utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(404, 'Something was wrong with your query, please correct it'));
    });
};
