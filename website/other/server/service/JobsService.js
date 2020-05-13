'use strict';


/**
 * Returns all the jobs in the database
 *
 * limit Integer the limit of objects to return (optional)
 * offset Integer the offset of the objects to retur (optional)
 * returns List
 **/
exports.jobsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "requirements" : "requirements",
  "description" : "description",
  "closed" : true,
  "id" : 0,
  "title" : "title"
}, {
  "requirements" : "requirements",
  "description" : "description",
  "closed" : true,
  "id" : 0,
  "title" : "title"
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
 * jobId String The job ID to query for
 * returns Job
 **/
exports.jobsJobIdGET = function(jobId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requirements" : "requirements",
  "description" : "description",
  "closed" : true,
  "id" : 0,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

