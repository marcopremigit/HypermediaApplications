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
 * returns List
 **/
exports.servicesGET = () => db('service').then(data => data);


/**
 * Returns all the info bound to a service by ID
 *
 * serviceId String The service ID to query for
 * returns Service
 **/
exports.servicesServiceIdGET = serviceId => db('services').where({ id: serviceId }).then(d => d);



