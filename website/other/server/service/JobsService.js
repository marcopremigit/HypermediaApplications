'use strict';


/**
 * Returns all the jobs in the database
 *
 * returns List
 **/
exports.jobsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 50,
  "name" : "Informatico"
}, {
  "id" : 60,
  "name" : "Matematico"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the info bound to a job by ID
 *
 * jobId Integer The job ID to query for
 * returns Job
 **/
exports.jobsJobIdGET = function(jobId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requirements" : "requirements",
  "name" : "name",
  "description" : "description",
  "closed" : true,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

