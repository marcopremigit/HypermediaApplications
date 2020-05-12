'use strict';


/**
 * Updates the required event by booking one spot and reducing the correct database value
 *
 * eventId Integer The event ID to query for
 * returns Long
 **/
exports.eventsBookSpotEventIdPUT = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 49;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the info bound to a event by ID
 *
 * eventId Integer The event ID to query for
 * returns Event
 **/
exports.eventsEventIdGET = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "bookable" : true,
  "date_start" : "date_start",
  "name" : "name",
  "description" : "description",
  "date_end" : "date_end",
  "id" : 0,
  "place" : {
    "lng" : 0,
    "lat" : 0
  },
  "available_places" : 0,
  "category" : "Vacanza studio"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the events in the database
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 50,
  "name" : "X-mas party"
}, {
  "id" : 60,
  "name" : "Easter party"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

