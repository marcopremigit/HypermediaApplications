'use strict';

var utils = require('../utils/writer.js');
var Volunteers = require('../service/VolunteersService');

module.exports.volunteer_eventGET = function volunteer_eventGET (req, res, next, limit, id_event, id_volunteer) {
  Volunteers.volunteer_eventGET(limit, id_event, id_volunteer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteer_serviceGET = function volunteer_serviceGET (req, res, next, limit, id_volunteer, id_service) {
  Volunteers.volunteer_serviceGET(limit, id_volunteer, id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersGET = function volunteersGET (req, res, next, category, limit, offset) {
  Volunteers.volunteersGET(category, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersVolunteerIdGET = function volunteersVolunteerIdGET (req, res, next, volunteerId) {
  Volunteers.volunteersVolunteerIdGET(volunteerId)
    .then(function (response) {
      console.log('[VOLUNTEERS GET] - RESPONSE:');
      console.log(res);
      console.log(response);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
