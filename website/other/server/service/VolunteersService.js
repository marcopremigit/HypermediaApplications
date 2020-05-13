'use strict';


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


/**
 * Returns id_volunteer if id_service is inserted, or id_service if id_volunteer is inserted
 *
 * limit Integer the limit of objects to return (optional)
 * id_volunteer Integer Volunteer id (optional)
 * id_service Integer Service id (optional)
 * returns List
 **/
exports.volunteer_serviceGET = function(limit,id_volunteer,id_service) {
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
 * Returns all the volunteers in the database
 *
 * category String the category to filter the objects by (optional)
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.volunteersGET = function(category,limit,offset) {
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
 * Returns all the info bound to a volunteer by ID
 *
 * volunteerId String The volunteer ID to query for
 * returns Volunteer
 **/
exports.volunteersVolunteerIdGET = function(volunteerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "career" : "career",
  "phone" : "phone",
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "category" : "Professore",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

