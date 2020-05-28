'use strict';

let db;

exports.eventDbSetup = function(s) {
  db = s;
  console.log("[Event Service] - Checking if table exists...");
  return db.schema.hasTable("event")
  .then(exists => {
    if(!exists){
      console.log("[Event Service] - Table does not exist, I'm going to create one for you!");
      return db.schema.createTable("event", table => {
        table.increments();
        table.increments("id").primary();
        table.text("image").notNullable();
        table.text("title").notNullable();
        table.text("description");
        table.text("place");
        table.date("date_start");
        table.date("date_end");
        table.integer("available_places");
        table.enum("category",
        ["CAG","Vacanza studio","Colletta alimentare","Cena","Raccolta fondi"]);
      })
    } else {
      console.log("[Event Service] - Table exists, nothing to report.");
    }
  });
}

/**
 * Returns id_event if id_service is inserted, or id_service if id_event is inserted
 *
 * limit Integer the limit of objects to return (optional)
 * id_event Integer Event id (optional)
 * id_service Integer Service id (optional)
 * returns List
 **/
exports.event_serviceGET = function(id_event,id_service) {
  return db('eventsInService')
  .select(id_service ? 'id_event' : 'id_service')
  .where(
    id_service ? 
    {
      id_service: id_service
    }
    : 
    {
      id_event: id_event
  }) 
  .then(data => {
    return db(id_service ? 'event' : 'service')
    .whereIn('id', data.map(e => id_event ? e.id_service : e.id_event))
    .then(d => d);
  }); 
}



/**
 * Returns all the info bound to a event by ID
 *
 * eventId String The event ID to query for
 * returns Event
 **/
exports.eventsEventIdGET = eventId => db('event').where({ id: eventId }).then(d => d);


/**
 * Returns all the events in the database
 *
 * returns List
 **/
exports.eventsGET = () => db('event').select('id', 'name', 'category', 'image').then(data => data);

