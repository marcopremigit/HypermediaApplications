'use strict';
let db;

exports.bookingDbSetup = function(s) {
  db = s;
  console.log("[Booking Service] - Checking if table exists...");
  return db.schema.hasTable("booking")
  .then(exists => {
    if(!exists){
      console.log("[Booking Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("booking", table => {
        table.increments();
        table.increments("id").primary();
        table.text("email").notNullable();
        table.timestamp("timestamp").defaultTo(knex.fn.now());
        table.integer("event").notNullable();
      })
    } else {
      console.log("[Booking Service] - Table exists, nothing to report.");
    }
  });
}


/**
 * Insert booking object into database
 *
 * id_event Integer Event id
 * email String Email
 * no response value expected for this operation
 **/
exports.bookingPOST = function(id_event,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

