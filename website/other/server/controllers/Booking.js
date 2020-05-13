'use strict';

var utils = require('../utils/writer.js');
var Booking = require('../service/BookingService');

module.exports.bookingPOST = function bookingPOST (req, res, next, id_event, email) {
  Booking.bookingPOST(id_event, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
