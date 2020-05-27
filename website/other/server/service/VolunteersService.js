'use strict';

let db;

exports.volunteersDbSetup = function(s) {
  db = s;
  console.log("[Volunteers Service] - Checking if table exists...");
  return db.schema.hasTable("volunteers")
  .then(exists => {
    if(!exists){
      console.log("[Volunteers Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("volunteers", table => {
        table.increments();
        table.text("img").notNullable();
        table.string("name",20).notNullable();
        table.string("email",30);
        table.string("phone",10);
        table.text("description");
        table.text("career");
        table.enum("category",["Professore","Studente"]).notNullable();
      })
    } else {
      console.log("[Volunteers Service] - Table exists, nothing to report.");
    }
  });
}

/**
 * Returns id_event if id_volunteer is inserted, or id_volunteer if id_event is inserted
 *
 * id_event Integer Event id (optional)
 * id_volunteer Integer Volunteer id (optional)
 * returns List
 **/
exports.volunteer_eventGET = function(id_event,id_volunteer) {
  return db('volunteerInEvent')
  .select(id_volunteer ? 'id_event' : 'id_volunteer')
  .where(
    id_volunteer ? 
    {
      id_volunteer: id_volunteer
    }
    : 
    {
      id_event: id_event
  }) 
  .then(data => {
    return db(id_volunteer ? 'event' : 'volunteers')
    .whereIn('id', data.map(e => id_volunteer ? e.id_event : e.id_volunteer))
    .then(d => d);
  }); 
}


/**
 * Returns id_volunteer if id_service is inserted, or id_service if id_volunteer is inserted
 *
 * id_volunteer Integer Volunteer id (optional)
 * id_service Integer Service id (optional)
 * returns List
 **/
exports.volunteer_serviceGET = function(id_volunteer,id_service) {
  return db('volunteerInService')
  .select(id_volunteer ? 'id_service' : 'id_volunteer')
  .where(
    id_volunteer ? 
    {
      id_volunteer: id_volunteer
    }
    : 
    {
      id_service: id_service
  }) 
  .then(data => {
    return db(id_volunteer ? 'service' : 'volunteers')
    .whereIn('id', data.map(e => id_volunteer ? e.id_service : e.id_volunteer))
    .then(d => d);
  }); 
}


/**
 * Returns all the volunteers in the database
 *
 * returns List
 **/
exports.volunteersGET = fields => db('volunteers').select(fields).then(data => data);


/**
 * Returns all the info bound to a volunteer by ID
 *
 * volunteerId String The volunteer ID to query for
 * returns Volunteer
 **/
exports.volunteersVolunteerIdGET = volunteerId => db('volunteers').where({ id_volunteer: volunteerId });
