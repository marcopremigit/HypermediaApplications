'use strict';


/**
 * Returns all the volunteers in the database
 *
 * returns List
 **/
exports.volunteersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 20,
  "name" : "John Wick"
}, {
  "id" : 40,
  "name" : "John Dorian"
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
 * volunteerId Integer The volunteer ID to query for
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
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

