'use strict';


/**
 * Returns all the services in the database
 *
 * returns List
 **/
exports.servicesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 10,
  "name" : "Save the world"
}, {
  "id" : 30,
  "name" : "Save the universe"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the info bound to a service by ID
 *
 * serviceId Integer The service ID to query for
 * returns Service
 **/
exports.servicesServiceIdGET = function(serviceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "category" : "Ripetizione"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

