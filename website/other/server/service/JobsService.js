'use strict';

let db;

exports.jobsDbSetup = function(s) {
  db = s;
  console.log("[Jobs Service] - Checking if table exists...");
  return db.schema.hasTable("jobs")
  .then(exists => {
    if(!exists){
      console.log("[Jobs Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("jobs", table => {
        table.increments();
        table.increments("id").primary();
        table.string("title",50).notNullable(); //text?
        table.string("description",200);// text?
        table.boolean("closed").notNullable();
        table.string("requirements",50);// text?
      })
    } else {
      console.log("[Jobs Service] - Table exists, nothing to report.");
    }
  });
}

/**
 * Returns all the jobs in the database
 *
 * returns List
 **/
exports.jobsGET = () => db('jobs').then(data => data);

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

