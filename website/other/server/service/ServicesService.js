'use strict';

let db;

exports.serviceDbSetup = function(s) {
  db = s;
  console.log("[Service Service] - Checking if table exists...");
  return db.schema.hasTable("service")
  .then(exists => {
    if(!exists){
      console.log("[Service Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("service", table => {
        table.increments();
        table.increments("id").primary();
        table.text("image").notNullable();
        table.string("title",50).notNullable();
        table.string("description",300);
        table.enum("category",["Ripetizione,Orientamento"]);
      })
    } else {
      console.log("[Service Service] - Table exists, nothing to report.");
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
  if(!limit) limit = 10;
  if(!offset) offset = 0;

  return db('service')
  // .limit(limit)
  .offset(offset)
  .then(data => data);
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



