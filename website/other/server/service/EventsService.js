'use strict';

let db;

exports.eventDbSetup = function(s) {
  db = s;
  console.log("[Event Service] - Checking if table exists...");
  return db.schema.hasTable("event")
  .then(exists => {
    if(!exists){
      console.log("[Event Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("event", table => {
        table.increments();
        //TODO: create event table!
      })
    } else {
      console.log("[Event Service] - Table exists, nothing to report.");
    }
  });
}

/**
 * Returns id_event if id_service is inserted, or id_service if id_event is inserted
 *
 * limit Integer the limit of objects to return (optional)
 * id_event Integer Event id (optional)
 * id_service Integer Service id (optional)
 * returns List
 **/
exports.event_serviceGET = function(limit,id_event,id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates the required event by booking one spot and reducing the correct database value
 *
 * eventId String The event ID to query for
 * returns Integer
 **/
exports.eventsBookSpotEventIdPOST = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
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
 * eventId String The event ID to query for
 * returns Event
 **/
exports.eventsEventIdGET = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "bookable" : true,
  "date_start" : "date_start",
  "description" : "description",
  "date_end" : "date_end",
  "id" : 0,
  "place" : {
    "lng" : 0,
    "lat" : 0
  },
  "available_places" : 0,
  "title" : "title",
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
 * category String the category to filter the objects by (optional)
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.eventsGET = function(category,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "image",
  "bookable" : true,
  "date_start" : "date_start",
  "description" : "description",
  "date_end" : "date_end",
  "id" : 0,
  "place" : {
    "lng" : 0,
    "lat" : 0
  },
  "available_places" : 0,
  "title" : "title",
  "category" : "Vacanza studio"
}, {
  "image" : "image",
  "bookable" : true,
  "date_start" : "date_start",
  "description" : "description",
  "date_end" : "date_end",
  "id" : 0,
  "place" : {
    "lng" : 0,
    "lat" : 0
  },
  "available_places" : 0,
  "title" : "title",
  "category" : "Vacanza studio"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns id_event if id_volunteer is inserted, or id_volunteer if id_event is inserted
 *
 * limit Integer the limit of objects to return (optional)
 * id_event Integer Event id (optional)
 * id_volunteer Integer Volunteer id (optional)
 * returns List
 **/
exports.volunteer_eventGET = function(limit,id_event,id_volunteer) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

