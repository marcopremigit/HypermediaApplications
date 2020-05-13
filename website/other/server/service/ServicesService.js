'use strict';


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
 * Returns all the services in the database
 *
 * category String the category to filter the objects by (optional)
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.servicesGET = function(category,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "image",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "category" : "Ripetizione"
}, {
  "image" : "image",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "category" : "Ripetizione"
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
 * serviceId String The service ID to query for
 * returns Service
 **/
exports.servicesServiceIdGET = function(serviceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "category" : "Ripetizione"
};
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

