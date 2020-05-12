'use strict';

var utils = require('../utils/writer.js');
var Volunteers = require('../service/VolunteersService');

module.exports.volunteersGET = function volunteersGET (req, res, next) {
  Volunteers.volunteersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersVolunteerIdGET = function volunteersVolunteerIdGET (req, res, next) {
  var volunteerId = req.swagger.params['volunteerId'].value;
  Volunteers.volunteersVolunteerIdGET(volunteerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
